# StoryBook

## Install

まずは storybook をグローバルにインストールする

```
$ npm i -g @storybook/cli
```

## React Native で使用する

プロジェクトのディレクトリに移動して`getstorybook`を実行

```
$ getstorybook
```

あとは勝手に設定されて,storybook というフォルダが作成される
package.json に追加でコマンドができたりする。次回からはこちらを使う

```
yarn run storybook
```

#### 注意

ReactNative の場合、コンポーネントの動作はシュミレーター上で確認するので既にアプリが起動してる場合は、いつも動かしてる local のサーバーは落としておく必要があるまずは storybook のサーバーを起動
その後、デバイスを立ち上げてから確認する
