// Función para generar una contraseña aleatoria
function generateRandomPassword(length) {
  const charset =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

// Genera 20 registros con correos electrónicos aleatorios y contraseñas generadas aleatoriamente
for (let i = 1; i <= 20; i++) {
  const email = `user${i}@example.com`;
  const password = generateRandomPassword(8); // Longitud de la contraseña: 8 caracteres
  db.users.insertOne({
    email: email,
    password: password,
  });
}
