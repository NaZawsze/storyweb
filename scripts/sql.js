// 1 ����
const mysql = require('mysql');
// 2 ������������
const conn = mysql.createConnection({
    host:'localhost',   // ������ ����������ַ��
    user:'testdbadmin',    //�û���
    password:'testpassword'
    database:'testdb2',  // д���Լ�Ҫ���ӵ����ݿ�����
})
// 3 ��������
conn.connection()
// 4 ����sql��� ��ɾ�Ĳ����
let sql = 'select id from users where id = 1'
//5  ִ��sql���
conn.query(sql, (err, result) => {
    if(err){
        console.log(err);
        return
    }
    // 6 ������
    console.log(result)
    alert(result[0])
})
