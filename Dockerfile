# Mac docker 需要安装 desktop 版本
# 1. 构建 Docker 镜像: docker build -t utils-portal .

    # - -t 选项用于为生成的镜像指定一个标签（tag）
    # - . 表示当前目录，Docker 将在当前目录中查找 Dockerfile 文件以及其他可能需要的文件

# 2. 运行 Docker 容器: docker run -d -p 6060:80 --name utils-portal-app utils-portal

    # - -d 表示在后台运行容器
    # - -p 6060:80 将容器的 80 端口映射到宿主机的 6060 端口
    # - --name utils-portal-app 为容器指定一个名称


# 使用 Node.js 作为基础镜像
FROM node:16 AS build

# 设置工作目录
WORKDIR /app

# 将 package.json 和 yarn.lock 复制到镜像中
COPY package.json yarn.lock ./

# 安装依赖
RUN yarn install --frozen-lockfile

# 复制项目文件到镜像中
COPY . .

# 构建 Umi 应用
RUN yarn build

# 第二阶段 - 运行阶段
FROM nginx:alpine

# 复制构建的文件到 Nginx 的默认 HTML 目录中
COPY --from=build /app/dist /usr/share/nginx/html/utils-portal

# 复制自定义的 Nginx 配置文件
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]