# シンプルなHTML,CSS,JSで構成するケースに有効なボイラープレートです

## 環境構築

- formatterを使うためにnodeを使用しています
  - 環境構築しなくても確認はできますが、インデントなど不要な差分が発生するので環境構築してください

### nodeバージョン

- 20.18.0を使用
  - パッケージマネージャにvoltaを使用しています
  - voltaを使用していれば自動的にバージョン固定されます

### パッケージ

- prettier
  - フォーマッター (全般)
- stylelint
  - cssファイルの静的チェック
- markuplint
  - htmlファイルの静的チェック
