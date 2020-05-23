import mysql from 'mysql';
import {initMapper, getNamespace} from './mapper';

var pool;

export const init = () => {
  pool = mysql.createPool({
    host  : 'dev-db.clpmvqurgiwz.ap-southeast-1.rds.amazonaws.com',
    port  : '3306',
    database : 'santa_admin',
    user  : 'admin',
    password : 'C89BM!K7ahJdVZNr',
    connectionLimit: 150,
    multipleStatements: true
  });
  console.log('# Created the pool of the mysql.');

  initMapper();
}

export const dbpool = () => pool

export const query = (path = '', param) => new Promise(resolve => {
  let namespace = getNamespace(path);
  if(!chkQueryValid(namespace)) throw 'the query error occurs.';
  pool.getConnection((err, conn) => {
    if(!err){
      //connected!
      conn.query(namespace, param, (e, r) => {
        if(!e) {
          resolve(JSON.parse(JSON.stringify(r)));
        }else{
          console.log('error....')
          console.log(e)
          throw 'the query error';
        }
        conn.release();
      });
    }else{
      console.log(err)
    }
    // 커넥션을 풀에 반환
    // conn.release();
  });


});

const chkQueryValid = (namespace) => {

  if(namespace === '' || namespace === undefined) return false;

  return true;
}