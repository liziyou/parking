/**
 *
 *  MD5 (Message-Digest Algorithm)
 *  http://www.webtoolkit.info/
 *
 **/
var MD5 = function (string) {

    function RotateLeft(lValue, iShiftBits) {
        return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
    }

    function AddUnsigned(lX,lY) {
        var lX4,lY4,lX8,lY8,lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            } else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        } else {
            return (lResult ^ lX8 ^ lY8);
        }
    }

    function F(x,y,z) { return (x & y) | ((~x) & z); }
    function G(x,y,z) { return (x & z) | (y & (~z)); }
    function H(x,y,z) { return (x ^ y ^ z); }
    function I(x,y,z) { return (y ^ (x | (~z))); }

    function FF(a,b,c,d,x,s,ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function GG(a,b,c,d,x,s,ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function HH(a,b,c,d,x,s,ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function II(a,b,c,d,x,s,ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1=lMessageLength + 8;
        var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
        var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
        var lWordArray=Array(lNumberOfWords-1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while ( lByteCount < lMessageLength ) {
            lWordCount = (lByteCount-(lByteCount % 4))/4;
            lBytePosition = (lByteCount % 4)*8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount)<<lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount-(lByteCount % 4))/4;
        lBytePosition = (lByteCount % 4)*8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
        lWordArray[lNumberOfWords-2] = lMessageLength<<3;
        lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
        return lWordArray;
    };

    function WordToHex(lValue) {
        var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
        for (lCount = 0;lCount<=3;lCount++) {
            lByte = (lValue>>>(lCount*8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
        }
        return WordToHexValue;
    };

    function Utf8Encode(string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }

        return utftext;
    };

    var x=Array();
    var k,AA,BB,CC,DD,a,b,c,d;
    var S11=7, S12=12, S13=17, S14=22;
    var S21=5, S22=9 , S23=14, S24=20;
    var S31=4, S32=11, S33=16, S34=23;
    var S41=6, S42=10, S43=15, S44=21;

    string = Utf8Encode(string);

    x = ConvertToWordArray(string);

    a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;

    for (k=0;k<x.length;k+=16) {
        AA=a; BB=b; CC=c; DD=d;
        a=FF(a,b,c,d,x[k+0], S11,0xD76AA478);
        d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
        c=FF(c,d,a,b,x[k+2], S13,0x242070DB);
        b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
        a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
        d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);
        c=FF(c,d,a,b,x[k+6], S13,0xA8304613);
        b=FF(b,c,d,a,x[k+7], S14,0xFD469501);
        a=FF(a,b,c,d,x[k+8], S11,0x698098D8);
        d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
        c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
        b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
        a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
        d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
        c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
        b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
        a=GG(a,b,c,d,x[k+1], S21,0xF61E2562);
        d=GG(d,a,b,c,x[k+6], S22,0xC040B340);
        c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
        b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
        a=GG(a,b,c,d,x[k+5], S21,0xD62F105D);
        d=GG(d,a,b,c,x[k+10],S22,0x2441453);
        c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
        b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
        a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
        d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
        c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
        b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);
        a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
        d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
        c=GG(c,d,a,b,x[k+7], S23,0x676F02D9);
        b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
        a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
        d=HH(d,a,b,c,x[k+8], S32,0x8771F681);
        c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
        b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
        a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
        d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
        c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
        b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
        a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
        d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
        c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
        b=HH(b,c,d,a,x[k+6], S34,0x4881D05);
        a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
        d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
        c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
        b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
        a=II(a,b,c,d,x[k+0], S41,0xF4292244);
        d=II(d,a,b,c,x[k+7], S42,0x432AFF97);
        c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
        b=II(b,c,d,a,x[k+5], S44,0xFC93A039);
        a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
        d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
        c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
        b=II(b,c,d,a,x[k+1], S44,0x85845DD1);
        a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
        d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
        c=II(c,d,a,b,x[k+6], S43,0xA3014314);
        b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
        a=II(a,b,c,d,x[k+4], S41,0xF7537E82);
        d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
        c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
        b=II(b,c,d,a,x[k+9], S44,0xEB86D391);
        a=AddUnsigned(a,AA);
        b=AddUnsigned(b,BB);
        c=AddUnsigned(c,CC);
        d=AddUnsigned(d,DD);
    }

    var temp = WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);

    return temp.toLowerCase();
};
String.prototype.digest = function (M) {
    var originalLength
        , i
        , j
        , k
        , l
        , A
        , B
        , C
        , D
        , AA
        , BB
        , CC
        , DD
        , X
        , rval
        ;

    function F(x, y, z) { return (x & y) | (~x & z); }
    function G(x, y, z) { return (x & z) | (y & ~z); }
    function H(x, y, z) { return x ^ y ^ z;          }
    function I(x, y, z) { return y ^ (x | ~z);       }

    function to4bytes(n) {
        return [n&0xff, (n>>>8)&0xff, (n>>>16)&0xff, (n>>>24)&0xff];
    }

    originalLength = M.length; // for Step.2

    // 3.1 Step 1. Append Padding Bits
    M.push(0x80);
    l = (56 - M.length)&0x3f;
    for (i = 0; i < l; i++)
        M.push(0);

    // 3.2 Step 2. Append Length
    to4bytes(8*originalLength).forEach(function (e) { M.push(e); });
    [0, 0, 0, 0].forEach(function (e) { M.push(e); });

    // 3.3 Step 3. Initialize MD Buffer
    A = [0x67452301];
    B = [0xefcdab89];
    C = [0x98badcfe];
    D = [0x10325476];

    // 3.4 Step 4. Process Message in 16-Word Blocks
    function rounds(a, b, c, d, k, s, t, f) {
        a[0] += f(b[0], c[0], d[0]) + X[k] + t;
        a[0] = ((a[0]<<s)|(a[0]>>>(32 - s)));
        a[0] += b[0];
    }

    for (i = 0; i < M.length; i += 64) {
        X = [];
        for (j = 0; j < 64; j += 4) {
            k = i + j;
            X.push(M[k]|(M[k + 1]<<8)|(M[k + 2]<<16)|(M[k + 3]<<24));
        }
        AA = A[0];
        BB = B[0];
        CC = C[0];
        DD = D[0];

        // Round 1.
        rounds(A, B, C, D,  0,  7, 0xd76aa478, F);
        rounds(D, A, B, C,  1, 12, 0xe8c7b756, F);
        rounds(C, D, A, B,  2, 17, 0x242070db, F);
        rounds(B, C, D, A,  3, 22, 0xc1bdceee, F);
        rounds(A, B, C, D,  4,  7, 0xf57c0faf, F);
        rounds(D, A, B, C,  5, 12, 0x4787c62a, F);
        rounds(C, D, A, B,  6, 17, 0xa8304613, F);
        rounds(B, C, D, A,  7, 22, 0xfd469501, F);
        rounds(A, B, C, D,  8,  7, 0x698098d8, F);
        rounds(D, A, B, C,  9, 12, 0x8b44f7af, F);
        rounds(C, D, A, B, 10, 17, 0xffff5bb1, F);
        rounds(B, C, D, A, 11, 22, 0x895cd7be, F);
        rounds(A, B, C, D, 12,  7, 0x6b901122, F);
        rounds(D, A, B, C, 13, 12, 0xfd987193, F);
        rounds(C, D, A, B, 14, 17, 0xa679438e, F);
        rounds(B, C, D, A, 15, 22, 0x49b40821, F);

        // Round 2.
        rounds(A, B, C, D,  1,  5, 0xf61e2562, G);
        rounds(D, A, B, C,  6,  9, 0xc040b340, G);
        rounds(C, D, A, B, 11, 14, 0x265e5a51, G);
        rounds(B, C, D, A,  0, 20, 0xe9b6c7aa, G);
        rounds(A, B, C, D,  5,  5, 0xd62f105d, G);
        rounds(D, A, B, C, 10,  9, 0x02441453, G);
        rounds(C, D, A, B, 15, 14, 0xd8a1e681, G);
        rounds(B, C, D, A,  4, 20, 0xe7d3fbc8, G);
        rounds(A, B, C, D,  9,  5, 0x21e1cde6, G);
        rounds(D, A, B, C, 14,  9, 0xc33707d6, G);
        rounds(C, D, A, B,  3, 14, 0xf4d50d87, G);
        rounds(B, C, D, A,  8, 20, 0x455a14ed, G);
        rounds(A, B, C, D, 13,  5, 0xa9e3e905, G);
        rounds(D, A, B, C,  2,  9, 0xfcefa3f8, G);
        rounds(C, D, A, B,  7, 14, 0x676f02d9, G);
        rounds(B, C, D, A, 12, 20, 0x8d2a4c8a, G);

        // Round 3.
        rounds(A, B, C, D,  5,  4, 0xfffa3942, H);
        rounds(D, A, B, C,  8, 11, 0x8771f681, H);
        rounds(C, D, A, B, 11, 16, 0x6d9d6122, H);
        rounds(B, C, D, A, 14, 23, 0xfde5380c, H);
        rounds(A, B, C, D,  1,  4, 0xa4beea44, H);
        rounds(D, A, B, C,  4, 11, 0x4bdecfa9, H);
        rounds(C, D, A, B,  7, 16, 0xf6bb4b60, H);
        rounds(B, C, D, A, 10, 23, 0xbebfbc70, H);
        rounds(A, B, C, D, 13,  4, 0x289b7ec6, H);
        rounds(D, A, B, C,  0, 11, 0xeaa127fa, H);
        rounds(C, D, A, B,  3, 16, 0xd4ef3085, H);
        rounds(B, C, D, A,  6, 23, 0x04881d05, H);
        rounds(A, B, C, D,  9,  4, 0xd9d4d039, H);
        rounds(D, A, B, C, 12, 11, 0xe6db99e5, H);
        rounds(C, D, A, B, 15, 16, 0x1fa27cf8, H);
        rounds(B, C, D, A,  2, 23, 0xc4ac5665, H);

        // Round 4.
        rounds(A, B, C, D,  0,  6, 0xf4292244, I);
        rounds(D, A, B, C,  7, 10, 0x432aff97, I);
        rounds(C, D, A, B, 14, 15, 0xab9423a7, I);
        rounds(B, C, D, A,  5, 21, 0xfc93a039, I);
        rounds(A, B, C, D, 12,  6, 0x655b59c3, I);
        rounds(D, A, B, C,  3, 10, 0x8f0ccc92, I);
        rounds(C, D, A, B, 10, 15, 0xffeff47d, I);
        rounds(B, C, D, A,  1, 21, 0x85845dd1, I);
        rounds(A, B, C, D,  8,  6, 0x6fa87e4f, I);
        rounds(D, A, B, C, 15, 10, 0xfe2ce6e0, I);
        rounds(C, D, A, B,  6, 15, 0xa3014314, I);
        rounds(B, C, D, A, 13, 21, 0x4e0811a1, I);
        rounds(A, B, C, D,  4,  6, 0xf7537e82, I);
        rounds(D, A, B, C, 11, 10, 0xbd3af235, I);
        rounds(C, D, A, B,  2, 15, 0x2ad7d2bb, I);
        rounds(B, C, D, A,  9, 21, 0xeb86d391, I);

        A[0] += AA;
        B[0] += BB;
        C[0] += CC;
        D[0] += DD;
    }

    rval = [];
    to4bytes(A[0]).forEach(function (e) { rval.push(e); });
    to4bytes(B[0]).forEach(function (e) { rval.push(e); });
    to4bytes(C[0]).forEach(function (e) { rval.push(e); });
    to4bytes(D[0]).forEach(function (e) { rval.push(e); });

    return rval;
}
