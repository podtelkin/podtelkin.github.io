// test | dev envinronment switch
var TEST_ENV =
    false
    //true
;

var IP = '172.18.72.102'; // outer ip
var serverConfig = {
    appName: 'api-test-app',
    domain: IP + ':8089',
    widget_server: TEST_ENV
        ? 'https://connect.ok.ru/'
        : ('http://'+ IP +':8088/'),
    api_server: TEST_ENV
        ? 'http://apitest.ok.ru'
        : 'http://sdevr65.mail.msk:8090/'
        //: 'http://sdevp29.mail.msk:8090/'
};

var appConf = {
    app_id: TEST_ENV
        ? "1250486784"
        : "806400",
    app_key: TEST_ENV
        ? "CBALOJILEBABABABA"
        : "CBAPENABABABABABA",
    group: {
        scope: [
            'CHAT_WITH_USER',
            'STREAM_TO_GROUP'
        ].join(';')
    },
    oauth: {
        scope: [
            'VALUABLE_ACCESS',
            'PUBLISH_NOTE',
            'PUBLISH_TO_STREAM',
            'GROUP_CONTENT',
            'PERSONAL_CONTENT',
            //'APP_INVITE',
            //'GET_EMAIL',
            'PHOTO_CONTENT',
            'SETTINGS',
            'LIKE'
        ].join(';'),
        layout: "w"
    },
    widget_server: serverConfig.widget_server,
    api_server: serverConfig.api_server
};


