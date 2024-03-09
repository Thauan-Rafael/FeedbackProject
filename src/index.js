document.addEventListener('DOMContentLoaded', function () {
    const editableDiv = document.getElementById('feedback');
  
    editableDiv.addEventListener('input', function () {
      if (this.textContent.trim() === '') {
        this.classList.add('empty');
      } else {
        this.classList.remove('empty');
      }
    });
  });
  