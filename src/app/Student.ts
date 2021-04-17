export interface Student {
  name: string;
  sno: string;
  // 是否禁止显示标题栏
  simple: boolean;

  // 离校部分
  phone: string;
  // 随机选取一个理由
  reasons: string[];
  // 审批人
  teacher: string;
}
