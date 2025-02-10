export default function Summary({items}) {
    const itemsCount = items.length
    const completedItemsCount = items.filter(item => item.completed).length
    return (
      <footer className="summary">
        {itemsCount > 0 ? (
          itemsCount !== completedItemsCount ? (
            <p>
              Alışveriş sepetinizde {itemsCount} ürün bulunmaktadır. {itemsCount} üründen {completedItemsCount} ürünü aldınız.
            </p>
          ) : (
            <p>Alışverişinizi tamamladınız 😍</p>
          )
        ) : (
          <p>Listeniz bomboş 😯 Alışveriş listenizi hazırlamaya başlayabilirsiniz 🥸</p>
        )}
      </footer>
    )
  }