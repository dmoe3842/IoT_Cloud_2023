// Fill in  your WiFi networks SSID and password
#define SECRET_SSID "hhs"
#define SECRET_PASS "12345678"

// Fill in the hostname of your AWS IoT broker
#define SECRET_BROKER "a2qzdxmjy2k5do-ats.iot.ap-northeast-2.amazonaws.com"

// Fill in the boards public certificate
const char SECRET_CERTIFICATE[] = R"(
-----BEGIN CERTIFICATE-----
MIICgzCCAWugAwIBAgIVANo+mwYwx4pOmyFYB2k/nyPlLl6RMA0GCSqGSIb3DQEB
CwUAME0xSzBJBgNVBAsMQkFtYXpvbiBXZWIgU2VydmljZXMgTz1BbWF6b24uY29t
IEluYy4gTD1TZWF0dGxlIFNUPVdhc2hpbmd0b24gQz1VUzAeFw0yMzExMjcxMTIy
MTFaFw00OTEyMzEyMzU5NTlaMBIxEDAOBgNVBAMTB0RldmljZTEwWTATBgcqhkjO
PQIBBggqhkjOPQMBBwNCAAT7Z+/sa6g6z68wt0m08cqJQhLXSTC4uilJt5qdLrmd
npw3KYnJm/0mQpdC39MrmQjQzMR3YI48cvvN21T+tHgwo2AwXjAfBgNVHSMEGDAW
gBRS+vcNcyYYJeZc201xYQPwztrW+zAdBgNVHQ4EFgQU3OsaLbUx7YTbH9h4IRXK
gZ73WqowDAYDVR0TAQH/BAIwADAOBgNVHQ8BAf8EBAMCB4AwDQYJKoZIhvcNAQEL
BQADggEBAGLGXoFRVB9q5le+ltmABcO/xQ7nqByRr64OvG6rPswWE/BejfmF/7Hf
FYdJJSFrx9K+zYMy5YUtOgrfkBdScEMn9BXV+DghRO+phkIIh+/emJkypGDM+nju
pxp5OknLAcYgUL/TaMCLA6shpBPQ5oTCIpa3WcehSKVwG1PvZfC5SjToOGqEXsYV
tWgZlsN5RBfEdzPx0H92JqIzIBAk8FNjVFsbdRrlzBPYQbpWWz7lJvjYxMWImxza
1w3rtpGDdOnUAmx1sMOVtYI8qD/cvBkblRN01gOKVxjSvB3lp79MljGLWceWZZ/f
YY46UbFeS3b1/IQz2Xhmrh+Ut6gSfBE=
-----END CERTIFICATE-----
)";
