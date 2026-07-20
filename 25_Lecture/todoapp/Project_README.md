

yeh btayega ki yeh project kese kaam kar raha hai aur saari cheezo ka kesa kaam chal raha hai

npm i express mongoose mongodb dotenv

config folder me hum apna database connect karne ka code likhte hai
iske ander tum apna connection ka code likhte ho for example db.js

model folder yehj kaam karta hai ki tum joh bhi table bana rahe ho uska schema likhte ho
schema=structure
model folder me hum apni tables ka schema likhte hai

public folder me hum apna poora frontend ka code likhte hai
ab iske ek main point hai
tumhe hamesha uska name index.html rakhna padhega

index.html me mera basic code hai iput and add todo button aur jitne bhi todo honge mai saare frontend par show karunga aur uske saath unko edit and delete ka option bhi dunga

script.js me
sabse pehla kaam kara ki bhai mujhe saare previous todo task dikhao aur uske baad humne function implement kara loadtodos karke
jaise hi user ne input me likha aur add button par press kara toh tum kaya karoge previous todo ke saath ab new todo bhi dikhayoge
phit humne deletetodos banaya jisme hum id dekar hum method bta denge ki delte karna hai
aur edit todo me id and old title dediya aur kuchh nahi aaya toh same rakhenge title aur agar new tritle toh usko fetch ke through hhum backend par bhej denge and method put bata denge

app.js
isme express apni connection and table require kari
phir maine dotenv ko bhi require kara

connection calll hua establich hua aur maine public folder me static files bhej di

jaise hi /todos par call aayegi mera router kaam karega
ab humne app.js meapp.use /todos jaise hi aayegi todoroutes par call chali jayegi

app.js start karenge
databse se connection hoga
saari static files aa jayegi localhost pe
static file me maine input daala aur add kara
add button par addtodo function hai
method header aur body saath /todos par bhej dega
ab tum todoroutes par gaye
method ko dhundha and kaam kar liya
response banaya and client ko bhej diya
ab jab loadtodos call hoga frontend par tab tumhara task dikhne lagega
