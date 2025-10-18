// Profile Card behavior script
(function () {
  const timeEl = document.getElementById('timeNow');
  const avatarImg = document.getElementById('avatarImg');
  const avatarUrlInput = document.getElementById('avatarUrl');
  const avatarFileInput = document.getElementById('avatarFile');

  // Render Date.now() in ms at load and update periodically (every 500ms)
  function renderTime() {
    if (timeEl) timeEl.textContent = String(Date.now());
  }
  renderTime();
  setInterval(renderTime, 500);

  // Avatar URL input: on change or Enter, update image
  if (avatarUrlInput) {
    avatarUrlInput.addEventListener('change', () => {
      const url = avatarUrlInput.value.trim();
      if (url) {
        avatarImg.src = url;
        avatarImg.alt = 'User avatar (from URL)';
      }
    });
    avatarUrlInput.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') avatarUrlInput.dispatchEvent(new Event('change'));
    });
  }

  // Avatar file upload: convert to object URL and set as image src
  if (avatarFileInput) {
    avatarFileInput.addEventListener('change', (e) => {
      const files = avatarFileInput.files;
      if (!files || files.length === 0) return;
      const file = files[0];
      if (!file.type.startsWith('image/')) return;
      // Use a blob URL for performance and to avoid base64 overhead
      const blobUrl = URL.createObjectURL(file);
      avatarImg.src = blobUrl;
      avatarImg.alt = `User avatar (uploaded: ${file.name})`;
      // Revoke object URL later after image loads
      avatarImg.onload = () => {
        try { URL.revokeObjectURL(blobUrl); } catch (err) { /* ignore */ }
      };
    });
  }

  // Basic graceful fallback if scripts disabled: keep static placeholder
})();
