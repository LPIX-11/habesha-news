'use strict';

const baseUrl = `${process.env.BASE_URL}/${process.env.VERSION}`;

const username = 'saladthieves';
const email = 'salad@mail.com';
const password = 'awesomeness';

const usersUrl = baseUrl + '/users';
const usersLoginUrl = usersUrl + '/login';
const usersSignUpUrl = usersUrl + '/signup';

exports.data = {
    username, email, password,
    usersUrl,
    usersLoginUrl, usersSignUpUrl
};