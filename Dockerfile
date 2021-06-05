FROM node
WORKDIR ./app
COPY package.json .
ARG ENV
RUN if [ "$ENV" = "PROD" ] ; then npm install --only=prod; else npm install ; fi

COPY . .
ENV PORT 4000
EXPOSE $PORT
CMD ["node", "index.js"]