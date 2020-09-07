exports.main = (req, res, next) => {
    res.render('dashboard/dashboard-main', {
        pageTitle: 'Dashboard',
        path: '/'
    });
};

exports.active = (req, res, next) => {
    res.render('dashboard/dashboard-active', {
        pageTitle: 'Active',
        path: '/active',
    });
};

exports.transactions = (req, res, next) => {
    res.render('dashboard/transactions', {
        pageTitle: 'Transactions',
        path: '/transactions',
    });
};

exports.investments = (req, res, next) => {
    res.render('dashboard/investments', {
        pageTitle: 'Investments',
        path: '/investments',
    });
};

exports.settings = (req, res, next) => {
    res.render('dashboard/settings', {
        pageTitle: 'Settings',
        path: '/settings'
    })
}