/* v1.43: クロピドグレル MASTER 6項目の専用問題と個別解説 */
const REVIEWED_BATCH_14 = (() => {
  const previous = REVIEWED_BATCH_13["クロピドグレル"];
  if (!previous || previous.length !== 3) throw new Error("reviewed_batch13.js が必要です");
  const master = previous[2].map(q => ({...q, options:q.options.map(o=>({...o}))}));
  const additions = [{"key": "classification", "label": "分類", "mode": "single", "title": "PCI後にアスピリンとクロピドグレルが処方された。両薬を併用する主な薬理学的根拠はどれか。", "options": [{"t": "異なる血小板活性化経路を阻害し、血小板凝集を抑制する", "ok": true, "reason": "アスピリンはCOX-1、クロピドグレルはP2Y₁₂を標的とする。"}, {"t": "両方ともXa因子を直接阻害し、抗凝固作用を重ねる", "ok": false, "reason": "どちらも直接Xa阻害薬ではなく、抗血小板薬である。"}, {"t": "アスピリンがクロピドグレルを腎臓で活性化する", "ok": false, "reason": "クロピドグレルの活性化は主に肝での代謝による。"}, {"t": "両者ともビタミンKの再利用を阻害する", "ok": false, "reason": "ビタミンK拮抗作用はワルファリンの機序である。"}], "explanation": "二剤併用抗血小板療法（DAPT）は異なる標的を介して血小板凝集を抑える。", "sourceIds": ["PMDA_PLAVIX_2025_05"]}, {"key": "indications", "label": "主な適応", "mode": "single", "title": "末梢動脈疾患でクロピドグレル75mg/日を服用している患者が「この薬の目的は何ですか」と尋ねた。説明として適切なのはどれか。", "options": [{"t": "血栓・塞栓形成を抑制する目的で使用する", "ok": true, "reason": "末梢動脈疾患における血栓・塞栓形成の抑制が承認適応である。"}, {"t": "末梢動脈を拡張させて即時に間欠性跛行を消す薬である", "ok": false, "reason": "抗血小板作用が主で、即時の血管拡張薬ではない。"}, {"t": "心原性脳塞栓症の治療に限って承認された薬である", "ok": false, "reason": "末梢動脈疾患にも適応があり、心原性脳塞栓症に限定されない。"}, {"t": "血糖値を下げて動脈硬化を直接治す薬である", "ok": false, "reason": "血糖降下薬ではない。"}], "explanation": "クロピドグレルは末梢動脈疾患における血栓・塞栓形成の抑制に用いられる。", "sourceIds": ["PMDA_PLAVIX_2025_05"]}, {"key": "specialNotes", "label": "特記事項", "mode": "single", "title": "クロピドグレル服用中の患者に、出血リスクが高い予定手術が決まった。薬剤師の対応として最も適切なのはどれか。", "options": [{"t": "手術内容と血栓リスクを確認し、処方医・術者と休薬方針を相談する", "ok": true, "reason": "電子添文は血小板凝集抑制が問題となる手術で14日以上前の中止が望ましいとするが、血栓リスクも考慮する。"}, {"t": "すべての手術で患者判断により当日だけ休薬する", "ok": false, "reason": "手術内容と残存する抗血小板作用を考慮する必要がある。"}, {"t": "ステント留置歴があっても血栓リスクは考慮しない", "ok": false, "reason": "休薬に伴う血栓・塞栓リスクを評価する必要がある。"}, {"t": "休薬後の再開は止血の確認なしに必ず術直後とする", "ok": false, "reason": "再開には手術部位の止血確認が必要である。"}], "explanation": "予定手術では出血・血栓の両リスクを考慮して医療者が休薬と再開を決める。", "sourceIds": ["PMDA_PLAVIX_2025_05"]}];
  for (const q of additions) {
    const pos = master.findIndex(old => ({adverse:'adverseEffects',caution:'precautions',special:'specialNotes'}[old.key]||old.key) === q.key);
    if (pos < 0) throw new Error('MASTER項目が見つかりません: '+q.key);
    master[pos] = q;
  }
  if (master.length !== 6 || new Set(master.map(q=>({adverse:'adverseEffects',caution:'precautions',special:'specialNotes'}[q.key]||q.key))).size !== 6) throw new Error('MASTER 6項目の検証に失敗');
  return {"クロピドグレル":[previous[0],previous[1],master]};
})();
