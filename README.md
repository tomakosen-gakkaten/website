# website

苫小牧高専 学科展 Web サイト

https://tomakosen-gakkaten.github.io/website/

## info

このサイトは TypeScript React を用いて作成されています。  
とはいえ、アプリケーションの的なことはたいしてやっていないので、分割可能 HTML テンプレートエンジンぐらいにしか使っていないです(+ `react-router`)  
スタイリングには SCSS を使っています  
開発するときには最初に`npm i`を実行して、依存関係をインストールしてください(node.js インストール前提)

### 各班ページについて

`src/pages/group`に各班のページのひな形があります。文章と画像だけでそれなりにいい感じになると思います。  
班で独自のスタイルを当てたい場合は、id セレクタを当ててあるので`src/style/_group.scss`とかに追記すればいいと思います

### npm scripts について

VSCode を使ってる人はエクスプローラータブの左下に NPM スクリプトって出ます。そうでない人は直接コマンドを打ちます。  
`npm run start`を実行すると、ブラウザでアプリの画面が開きます。ソースコードを変更すると、自動で変更が適用されます。  
`npm run format`を実行すると、ソースコードが自動でフォーマットされます。コミット前とかに実行してください。  
他は特に使いません。

### その他

色はなるべく CSS 変数を用いてください。定義は`src/style/_color.scss`でやってます  
main ブランチに push すると自動でデプロイされます。ちゃんと管理したい場合はブランチを切ったほうがいいです
