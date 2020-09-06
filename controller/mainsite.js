exports.home = (req, res, next) => {
  res.render('mainsite/index', {
    pageTitle: 'Homepage',
    path:'/',
  });
};

exports.about = (req, res, next) => {
  res.render('mainsite/about', {
    pageTitle: 'About Us',
    path: '/about',
  });
};

exports.faq = (req, res, next) => {
  res.render('mainsite/faqs', {
    pageTitle: 'FAQs',
    path: '/faqs',
  });
};

exports.login = (req, res, next) => {
  res.render('mainsite/login', {
    pageTitle: 'Login',
    path: '/login'
  });
};

exports.signup = (req, res, next) => {
  res.render('mainsite/sign-up', {
    pageTitle: 'Sign Up',
    path: '/sign-up',
  });
};

exports.policy = (req, res, next) => {
  res.render('mainsite/privacy-term', {
    pageTitle: 'Policy, Terms & Conditions',
    path: '/policy',
  });
};