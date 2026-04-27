// Wait for the page to fully load
document.addEventListener('DOMContentLoaded', () => {
  // --- Find elements ---
  const form = document.querySelector('form');
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const passwordInput = document.querySelector('#password');
  const submitButton = document.querySelector('button[type="submit"]');

  // --- Password strength indicator ---
  passwordInput.addEventListener('input', () => {
    const value = passwordInput.value;
    const length = value.length;

    if (length === 0) {
      submitButton.textContent = 'Create account';
      submitButton.className = submitButton.className
        .replace('bg-green-500', 'bg-rose-500')
        .replace('hover:bg-green-600', 'hover:bg-rose-600');
    } else if (length < 8) {
      submitButton.textContent = `Password too short (${length}/8)`;
    } else {
      submitButton.textContent = 'Create account ✓';
    }
  });

  // --- Form submit ---
  form.addEventListener('submit', (event) => {
    // Stop page from reloading
    event.preventDefault();

    // Get values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    // Simple validation
    if (name === '') {
      showError(nameInput, 'Please enter your name');
      return;
    }

    if (!email.includes('@')) {
      showError(emailInput, 'Please enter a valid email');
      return;
    }

    if (password.length < 8) {
      showError(passwordInput, 'Password must be at least 8 characters');
      return;
    }

    // All good!
    showSuccess();
  });

  // --- Helper functions ---

  const showError = (input, message) => {
    // Remove old error if exists
    const oldError = input.parentElement.querySelector('.error-message');
    if (oldError) oldError.remove();

    // Add red border
    input.classList.add('border-red-400', 'ring-red-200');
    input.classList.remove('border-gray-200');

    // Create error message element
    const error = document.createElement('p');
    error.className = 'error-message text-red-500 text-xs mt-1';
    error.textContent = message;

    // Insert after input
    input.parentElement.appendChild(error);

    // Remove error when user starts typing
    input.addEventListener(
      'input',
      () => {
        error.remove();
        input.classList.remove('border-red-400', 'ring-red-200');
        input.classList.add('border-gray-200');
      },
      { once: true },
    );
  };

  const showSuccess = () => {
    form.innerHTML = `
      <div class="text-center py-8">
        <div class="text-5xl mb-4">🌸</div>
        <h2 class="text-xl font-bold text-gray-900 mb-2">
          Welcome to SisterCircle!
        </h2>
        <p class="text-gray-500">
          Your account has been created successfully.
        </p>
      </div>
    `;
  };
});
