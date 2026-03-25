---
name: build
description: ビルドして "docs/" をステージングし "build" メッセージでコミットする
disable-model-invocation: true
---

以下の手順で実行してください：

1. `git diff` および `git diff --cached` を実行し、コミットされていない差分やステージ済みの差分がないことを確認する。差分がある場合はユーザーに報告して停止する。
2. `npm run build` を実行し、結果をユーザーに報告する。ビルドが失敗した場合は停止する。
3. `git add docs/ && git commit -m "build"` を実行する。
