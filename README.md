## 概要
このプロジェクトはソフトウェア設計論Iの課題のために TypeScript で作られました。
実行には、Node.js と NPM をインストールした上で、`$ npm init` を実行する必要があります。

すべてのプログラムは `src` に配置されています。
プログラムのエントリポイントは `src/index.js` です。

---

このプログラムは、RPG のような戦闘を行うためのプログラムです。
実行すると、戦闘の流れが標準出力に表示されます。

キャラクターの基本クラスであるUnitを継承して、勇者クラス Hero とドラゴンクラス Dragon があります。
Unit の基本行動には「こうげき」と「スキルこうげき」があり、対象 Unit を指定することでダメージを与えます。

勇者は装備品クラスである Equipment を装備することができ、攻撃力が上がります。
さらに、勇者は「こうげき」と「スキルこうげき」の他に、「装備品を使う」ことができ、装備された装備品を順番に使います。
使われた装備品によって、使用者や対象 Unit に回復、またはダメージを与えます。

## 環境
- Node.js
- TypeScript
- Yarn (Optional)

## 準備
$ `npm install`

## 実行
$ `npm start`
