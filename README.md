omo!!! check out i have issue on the next.config configuration and here us the issus i got. normally if you are geting your SRC image from a domain name then you have to configure the next js to accept the specifit domain name like  
images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.kinja-img.com', // Specific domain example
      },
    ],
  },

  but the Api in whic i am fetching the src value from use different domain name where the images are located. later somthing that i will come and debug but for now let me focuss on another project but if you go any ideas on how to get this done feel free to help out thanks in advance 