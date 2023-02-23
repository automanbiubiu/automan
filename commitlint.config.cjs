module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'build', // 构造工具或相关依赖的改动
                'chore', //
                'ci', // CI配置改动
                'docs', // 文档改动
                'feat', // 增加新功能
                'fix', // 修复bug
                'perf', // 提高性能改动
                'refactor', // 代码重构
                'revert', // 版本回退
                'style', // 样式改动
                'test', // 测试改动
                'add', // 增加
                'del', // 删除
                'update', // 更新

            ],
        ],
        'subject-case': [0],
    }
}
