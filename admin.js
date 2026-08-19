const ADMIN_MODE = false; // Set to true to enable the admin test panel

if (ADMIN_MODE) {
  const adminPanel = document.createElement('aside');
  adminPanel.id = 'adminPanel';
  adminPanel.innerHTML = `
    <div class="admin-panel-header">
      <h2>Admin Test Panel</h2>
      <button type="button" class="admin-minimize" data-admin="toggle-panel" aria-label="Minimize admin panel" aria-expanded="true">-</button>
    </div>
    <button type="button" data-admin="materials">Grant test materials</button>
    <button type="button" data-admin="upgrades">Max upgrades</button>
    <button type="button" data-admin="rolls">Set max roll count</button>
    <button type="button" data-admin="guarantee-cosmic">Guarantee 1/131072 next roll</button>
    <button type="button" data-admin="preview-animations">Preview every summon animation</button>
    <label>
      Summon animation
      <select id="adminAnimationTier">
        ${Object.keys(TIER_ITEMS).map((tier) => `<option value="${tier}">${tier}</option>`).join('')}
      </select>
    </label>
    <button type="button" data-admin="preview-selected">Play selected animation</button>
    <button type="button" data-admin="stop-preview" class="admin-danger">Stop animation preview</button>
    <label>
      Item amount
      <input id="adminAmount" type="number" min="0" value="1000" />
    </label>
    <button type="button" data-admin="all-items">Set all items</button>
    <button type="button" data-admin="reset" class="admin-danger">Reset browser save</button>
  `;
  document.body.appendChild(adminPanel);

  function refreshGame() {
    renderAll();
    setView('home');
  }

  function getAmount() {
    return Math.max(0, Number(document.getElementById('adminAmount').value) || 0);
  }

  adminPanel.addEventListener('click', (event) => {
    const action = event.target.dataset.admin;
    if (!action) return;

    if (action === 'toggle-panel') {
      const minimized = adminPanel.classList.toggle('minimized');
      event.target.textContent = minimized ? '+' : '-';
      event.target.setAttribute('aria-label', minimized ? 'Restore admin panel' : 'Minimize admin panel');
      event.target.setAttribute('aria-expanded', String(!minimized));
      return;
    }

    if (action === 'materials') {
      ITEMS.forEach((item) => {
        gameState.inventory[item] = (gameState.inventory[item] || 0) + 1000;
      });
      showToast(`Admin: 1000 of all ${ITEMS.length} items granted.`);
    }

    if (action === 'upgrades') {
      Object.keys(gameState.upgrades).forEach((key) => {
        gameState.upgrades[key] = UPGRADE_CATALOG[key].max_level || 10;
      });
      gameState.robots = gameState.robots.map(() => ROBOT_MAX_LEVEL);
      startAutomation();
      showToast('Admin: upgrades maxed for testing.');
    }

    if (action === 'rolls') {
      gameState.upgrades.bulk = 100;
      const maxRolls = getMaxRolls();
      const rollCount = document.getElementById('rollCount');
      rollCount.max = String(maxRolls);
      rollCount.value = String(maxRolls);
      rollCount.setAttribute('aria-label', `Roll count (max ${maxRolls})`);
      showToast(`Admin: roll count set to maximum (${maxRolls}).`);
    }

    if (action === 'guarantee-cosmic') {
      guaranteeNextTier('1/131072');
      showToast('Admin: next roll guaranteed at 1/131072.');
    }

    if (action === 'preview-animations') {
      showToast(`Admin: previewing ${Object.keys(TIER_ITEMS).length} summon animations.`);
      previewAllSummonAnimations();
      return;
    }

    if (action === 'preview-selected') {
      const tier = document.getElementById('adminAnimationTier').value;
      showToast(`Admin: previewing ${tier} animation.`);
      previewSummonAnimation(tier);
      return;
    }

    if (action === 'stop-preview') {
      stopAnimationPreview();
      showToast('Admin: animation preview stopped.');
      return;
    }

    if (action === 'all-items') {
      const amount = getAmount();
      Object.keys(gameState.inventory).forEach((item) => {
        gameState.inventory[item] = amount;
      });
      showToast(`Admin: all items set to ${amount}.`);
    }

    if (action === 'reset') {
      if (!window.confirm('Reset the browser save and reload the game?')) return;
      localStorage.removeItem(SAVE_KEY);
      sessionStorage.clear();
      automationTimers.forEach((timer) => clearInterval(timer));
      automationTimers = [];
      window.location.reload();
      return;
    }

    saveGame();
    refreshGame();
  });
}
