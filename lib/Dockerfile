FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/elsabot2/ELSA_BOT-V2/tree/main/lib/root/elsabot2
WORKDIR /root/elsabot2/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
