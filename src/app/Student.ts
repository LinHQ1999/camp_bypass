export interface Student {
  name: string;
  sno: string;
  // 是否禁止显示标题栏
  simple: boolean;

  // 离校部分
  phone: string;
  // 审批人
  teacher1: string;
  teacher2: string;

  from:string;
  destination:string;

  reason: string;
}
