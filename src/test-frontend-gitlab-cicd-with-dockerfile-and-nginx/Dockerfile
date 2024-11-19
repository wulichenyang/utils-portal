# 使用 Node.js 作为基础镜像
FROM node:18.17.0 AS build

# 设置工作目录
WORKDIR /app

# 将 package.json 和 yarn.lock 复制到镜像中
COPY package.json yarn.lock ./

# 安装依赖
# 可选带上参数： --frozen-lockfile
RUN yarn install

# 复制项目文件到镜像中
COPY . .

# 根据环境变量构建应用
ARG ENV
RUN if [ "$ENV" = "dev" ]; then yarn build-dev; \
    elif [ "$ENV" = "qa" ]; then yarn build-qa; \
    elif [ "$ENV" = "staging" ]; then yarn build-staging; \
    elif [ "$ENV" = "production" ]; then yarn build-production; \
    fi

# 第二阶段 - 运行阶段
FROM nginx:alpine

# 将构建的静态文件复制到 Nginx 的公用目录
COPY --from=build /app/dist /usr/share/nginx/html

# 复制自定义的 Nginx 配置文件
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露 Nginx 的默认端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]