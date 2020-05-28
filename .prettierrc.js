module.exports = {
  printWidth: 80, // 一行的字符数，如果超过会进行换行，默认为80
  tabWidth: 2, // 一个tab代表几个空格数，默认为2
  useTabs: false, // 是否使用tab进行缩进，默认为false，表示用空格进行缩减
  singleQuote: false, // 字符串是否使用单引号，默认为false，使用双引号
  semi: true, // 行位是否使用分号，默认为true
  trailingComma: "none", // 是否使用尾逗号
  bracketSpacing: true, // 对象大括号直接是否有空格，默认为true,
  jsxBracketSameLine: false, // 标签放在最后一行的末尾，而不是单独放在下一行
  insertPragma: false // 在文件顶部插入一个特殊的 @format 标记，指定文件格式需要被格式化。
};
