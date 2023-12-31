// Fill in  your WiFi networks SSID and password
#define SECRET_SSID "hhs"
#define SECRET_PASS "12345678"

// Fill in the hostname of your AWS IoT broker
#define SECRET_BROKER "a2qzdxmjy2k5do-ats.iot.ap-northeast-2.amazonaws.com"

// Fill in the boards public certificate
const char SECRET_CERTIFICATE[] = R"(
-----BEGIN CERTIFICATE-----
MIICgjCCAWqgAwIBAgIUPCUt5UlszedyyC1Dht8vEkfO+ZAwDQYJKoZIhvcNAQEL
BQAwTTFLMEkGA1UECwxCQW1hem9uIFdlYiBTZXJ2aWNlcyBPPUFtYXpvbi5jb20g
SW5jLiBMPVNlYXR0bGUgU1Q9V2FzaGluZ3RvbiBDPVVTMB4XDTIzMTIwMjEyMDU0
MFoXDTQ5MTIzMTIzNTk1OVowEjEQMA4GA1UEAxMHRGV2aWNlMjBZMBMGByqGSM49
AgEGCCqGSM49AwEHA0IABD6SCtlbHlq87AY05/QeoEv3VzaYGCPDo8j3EQn3LQhw
K35fdZgLyiA6p4Q33+pJR7OqL22cLxjFfuRhQFkycGyjYDBeMB8GA1UdIwQYMBaA
FPUjZtfSGHQhZgwqFOY1nH/JIXmaMB0GA1UdDgQWBBQeHWsYj4TpY2OMoZ0AGRRu
u7ynvTAMBgNVHRMBAf8EAjAAMA4GA1UdDwEB/wQEAwIHgDANBgkqhkiG9w0BAQsF
AAOCAQEAJdJErDPcb7hDazJEnHiWUhQ5hmh/H8Fkq1aka2zFGfNGv9kW+sEY5yvn
JbifxHjGHz7mdTgDl2yxFCl5Sb9Nq0e5YYDn1w1jWQ+iaZHY3UpoVM8xJ/5lla50
ET/H5jPktcvBh7HX5o2R1h6Rgt9jOAcjaob7EYOQ3l354ReggqQYxMT7i3bDCczX
Ik6uSGwRl5zCZJgOpUbec0AksrQre/iIMY3BLaBoVCqglTbOm9vXKejTCXr5pcJc
U2FBTiDRJhf0ohgvCKcsJTlenP57iGajplfSVaIq5tv5Ha6o/qhnwGU1/+7FNDLA
akmwKQtXOsoSX8jRBsULGLcKfQjGlg==
-----END CERTIFICATE-----
)";
