const mainContainer = document.getElementById('container');

const formNetflix = document.createElement('form');
formNetflix.className = 'signup-container';

mainContainer.appendChild(formNetflix);

// heading
const signinText = document.createElement('div');
const h1 = document.createElement('h1');
signinText.className = 'signin-text';
h1.className = 'sign-in';
h1.textContent = 'Sign In';
signinText.appendChild(h1);

// login
const loginInput = document.createElement('div');
loginInput.className = 'login-input';
const loginBox = document.createElement('input');
loginBox.className = 'login-box';
loginBox.placeholder = 'Email or phone number';

loginInput.appendChild(loginBox);

// password
const passwordInput = document.createElement('div');
passwordInput.className = 'password-input';
const passwordBox = document.createElement('input');
passwordBox.className = 'password-box';
passwordBox.placeholder = 'Password';

passwordInput.appendChild(passwordBox);

// Signin Button
const signInButton = document.createElement('button');
signInButton.className = 'signin-button';
signInButton.textContent = 'Sign In';

// remember-need-help
const rememberNeedHelp = document.createElement('div');
rememberNeedHelp.className = 'remember-need-help';

const checkBoxRemember = document.createElement('div');
checkBoxRemember.className = 'check-box-remember';

const checkBox = document.createElement('input');
checkBox.type = 'checkbox';

const rememberMeText = document.createElement('p');
rememberMeText.className = 'remember-text';
rememberMeText.textContent = 'Remember me';

const needHelp = document.createElement('div');
const needHelpP = document.createElement('a');
needHelpP.className = 'need-help-link';
needHelpP.href = '#NeedHelp';
needHelpP.textContent = 'Need Help ?';
needHelp.appendChild(needHelpP);

rememberNeedHelp.appendChild(checkBoxRemember);
rememberNeedHelp.appendChild(needHelp);

checkBoxRemember.appendChild(checkBox);
checkBoxRemember.appendChild(rememberMeText);

//loginFormOther
const loginFormOther = document.createElement('div');
loginFormOther.className = 'login-form-other';
const newToNetflix = document.createElement('p');
newToNetflix.className = 'new-to-netflix';
newToNetflix.textContent = 'New to Netflix ?';
const linkToSignUp = document.createElement('a');
linkToSignUp.className = 'link-to-sign-up';
linkToSignUp.href = '#SignUp';
linkToSignUp.textContent = 'Sign Up';

loginFormOther.appendChild(newToNetflix);
loginFormOther.appendChild(linkToSignUp);

// some text
const someText = document.createElement('span');
someText.className = 'some-text';
const someTextLink = document.createElement('p');
someTextLink.textContent = 'This page is protected by Google reCAPTCHA to ensure you are not a bot.';
const learnMore = document.createElement('a');
learnMore.className = 'learn-more';
learnMore.href = '#LearnMore';
learnMore.textContent = ' Learn More.';
someText.appendChild(someTextLink);
someTextLink.appendChild(learnMore);

//append form

formNetflix.appendChild(signinText);
formNetflix.appendChild(loginInput);
formNetflix.appendChild(passwordInput);
formNetflix.appendChild(signInButton);
formNetflix.appendChild(rememberNeedHelp);
formNetflix.appendChild(loginFormOther);
formNetflix.appendChild(someText);