# Native Base Install

### [documentaion](https://docs.nativebase.io/docs/GetStarted.html)

```
$ npm install native-base --save
```

依存関係を解決

```
$ react-native link
```

@expo / vector-icons をインストールする

```
npm install @expo/vector-icons --save
```

NativeBase は、loadAsync 関数を使用してロードできるカスタムフォントを使用できるようになる

```
async componentWillMount() {
  await Expo.Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
  });
}
```

## NativeBase のカスタマイズまで

NativeBase の Theme をカスタマイズする。

NativeBase は React Native の上に構築されています。したがって、どのコンポーネントでも、そのコンポーネントのデフォルトスタイルにマージされる style プロパティを渡すことができます。

1. ネイティブベースをインストールした後、端末からこのコマンドを実行する。

```
$ node node_modules/native-base/ejectTheme.js
```

2. すべてのテーマファイルと変数がプロジェクトルートに追加されます。変数またはテーマファイルを変更します。

3. `<StyleProvider>`でテーマを適用するコードまたはコンポーネントをラップします。

4. `<StyleProvider>`の props(`style`)に値として Theme の関数を渡す。\* 注意) 渡し方は関数。

example(マテリアルデザイン)

```
import React, { Component } from 'react';
import { Container, Content, Text, StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

​export default class ThemeExample extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <Content>
            <Text>
              texttexttexttexttext
            </Text>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}
```

## 3 種類の Theme が使える

1. プラットフォーム(Platform)
2. マテリアル(Material)
3. 共通色(Common Colors)
