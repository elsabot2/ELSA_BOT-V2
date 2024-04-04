FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/Khaledst1/ELSA_BOT-V2 /root/Khaledst1
WORKDIR /root/Khaledst1/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
