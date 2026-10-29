# DRUG COLLECTION v1.23 — 6薬剤108問 選択肢点検記録

対象：エナラプリル、ロサルタン、ニフェジピン、ベラパミル、ビソプロロール、フロセミド。各18問・計108問。選択肢ごとの確認票は OPTION_AUDIT_108.csv（原則432択、一部正誤2択）。

## 実施した確認
- 108問全件について正答キーの個数、単一選択・複数選択・正誤形式の整合、同一設問内の選択肢重複をプログラム検査。異常0件。
- 6薬剤の主要な薬効分類、作用標的、承認適応、禁忌、主な重大な有害事象を代表的なPMDA製品資料や標準薬理知識と対照した。
- 108問の問題文と選択肢を一覧化し、曖昧な表現や学習レベルの不一致を点検。MASTERでもBASICに近い問いを含むため、4つの問題文を改善した。

## 重要な限界
**全選択肢についてPMDA一次資料の該当段落を個別に紐付けた「独立した全面検証」までは完了していません。** 問題の正答キーが機械的に妥当であっても、医学的正確性を保証するものではありません。特に「必発」「すべて」等による不自然な誤答肢と、MASTERの症例性不足は残っています。全選択肢に参照節・根拠文・査読者による判断を添える追加レビューが必要です。

## 今回参照したPMDA資料の例
- エナラプリル: https://www.pmda.go.jp/PmdaSearch/iyakuDetail/ResultDataSetPDF/300119_2144002F1300_1_07
- ロサルタン: https://www.info.pmda.go.jp/downfiles/guide/ph/180095_2149039F1074_3_01G.pdf
- ニフェジピン: https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/2171014G3022_1?user=1
- ベラパミル: https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/2171008F1070_2?user=1
- ビソプロロール: https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/2123016F1131_1?user=1
- フロセミド: https://www.pmda.go.jp/PmdaSearch/iyakuSearch/

ゲーム内には照合ステータスを表示しない方針を維持します。学習進捗キーは変更しません。
