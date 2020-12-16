describe('services/order tests', () => {
  it('getOrders should return valid orders with certain properties', async () => {
    const sampleOrders = [
      {
        reference: 'ABC123',
        date: '2020-02-25T21:00:00.000Z',
        delivered: false,
        cost: 12.5
      },
      {
        reference: 'JYG850',
        date: '2020-01-18T21:00:00.000Z',
        delivered: true,
        cost: 8.9
      }
    ];
    const mockOrdersService = jest.fn(() =>
      Promise.resolve({ sampleOrders })
    )
    const test = await mockOrdersService()
    test.sampleOrders.map(order => {
      expect(order).toHaveProperty('reference')
      expect(order).toHaveProperty('date')
      expect(order).toHaveProperty('delivered')
      expect(order).toHaveProperty('cost')
    })
  })
})