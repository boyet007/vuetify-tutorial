# vuetify-tutorial

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### vue-cli instalasi
```
npm install -g @vue/cli
```

### vue-create
```
vue create vuetify-tutorial
```

### add-vuetify
```
vue add vuetify
```

### firebase add project
```
- npm install firebase 
- https://console.firebase.google.com/
- Add projects
- Database -> add new database -> test mode -> enable
  Add collections -> projects -> next
  (tambah record)
  field : title, type: string, value: code the homepage
  field : person, type : string, value : chunlee
  field : status, type : string, value : complete
  field : due, type : string, value : 10th Jan 2019
  field : content, type : string, value : bla bla bla..
  kemudian : save
- firestore : settingan vue di firebase
  masuk project overview -> klik </> -> copy script didalamnya
  bikin file baru di src : fb.js
  masukkan scriptnya
  diatas script taruh file impor :
  import firebase from 'firebase/app'
  import 'firebase/firestore'

 

```

