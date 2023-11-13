const users = [
  { id: 0, name: 'Umi', nickName: 'U', gender: 'MALE' },
  { id: 1, name: 'Fish', nickName: 'B', gender: 'FEMALE' },
];

const dataList = [
  { id: 0, price: 5000 },
  { id: 1, price: 1000 },
];

export default {
  'GET /api/v1/queryUserList': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: users },
      errorCode: 0,
    });
  },
  'PUT /api/v1/user/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
  'GET /api/v1/get-data': (req: any, res: any) => {
    res.json(users);
  },
  'GET /api/v1/get-data-list': (req: any, res: any) => {
    res.json(dataList);
  },
};
