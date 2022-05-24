## Robots-Rolodex

A simple demo of react by using `react-create-app`.

Preview: http://robots-rolodex.mphy.top

## NPM Scripts

开发
```bash
npm run  start
```

打包
```bash
npm run build
```

部署（`nginx`）
```nginx
server {
    listen 80;
    server_name robots-rolodex.mphy.top;
    index index.htm index.html;
    root /var/www/react-robots/robots-rolodex/build;
}
```
然后增加一条 DNS 记录指向你的服务器，重启 nginx，完成。

## Mock Data

使用到的图片接口：https://robohash.org

使用到的数据：
```json
{
  "data": [
    { "id": "robot1", "name": "Frunk", "email": "test@gmail.com" },
    { "id": "robot2", "name": "Jude", "email": "test@gmail.com" },
    { "id": "robot3", "name": "Jessica", "email": "test@gmail.com" },
    { "id": "robot4", "name": "Alan", "email": "test@gmail.com" },
    { "id": "robot5", "name": "Bobby", "email": "test@gmail.com" },
    { "id": "robot6", "name": "Peter", "email": "test@gmail.com" },
    { "id": "robot7", "name": "Daniel", "email": "test@gmail.com" },
    { "id": "robot8", "name": "Larry", "email": "test@gmail.com" },
    { "id": "robot9", "name": "Caleb", "email": "test@gmail.com" },
    { "id": "robot10", "name": "Amanda", "email": "test@gmail.com" }
  ]
}
```