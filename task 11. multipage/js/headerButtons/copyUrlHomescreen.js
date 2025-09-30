const copyUrlBtn = document.querySelector('.copy-url');

if (copyUrlBtn) {
  copyUrlBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);

    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  });
}
