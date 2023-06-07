# Vue 3 + TypeScript + Vite

# 创建项目命令：npm create vite@latest

问题：vue3导入模块时报错---‘HelloWorld‘ is declared but its value is never read.Vetur(6133)
  因为vue3已经不支持vetur!!
  在设置里面搜索并在本工作区禁用vetur（vetur插件禁用）
  [
    vue3推荐使用Volar
  ]
# 在控制台会显示 user --host to expose（使用 --host 暴露网络）
1.在根目录下的 vite.config.js 文件中添加以下内容
import vue from '@vitejs/plugin-vue'
/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue()],
  server: {                // ← ← ← ← ← ←
    host: '0.0.0.0'    // ← 新增内容 ←
  }                        // ← ← ← ← ← ←
}
2. 修改 npm 脚本
修改 package.json 文件中 scripts 节点下的脚本，如下：
"scripts": {
  "dev": "vite --host 0.0.0.0",
  "build": "vite build",
  "serve": "vite preview --host 0.0.0.0"
}