    const people = [{
            name: 'Amy',
            order: "红烧肉",
            price: 35
        },
        {
            name: 'bob',
            order: "红烧鱼",
            price: 40
        },
        {
            name: 'candy',
            order: "红烧茄子",
            price: 15
        },
        {
            name: 'dog',
            order: "红烧猪蹄",
            price: 70
        }
    ]

    //for each不可以break,点菜了，先看看列出的所有菜单
    people.forEach(function (obj, index) {
        console.log(obj, index);
    });

    //2.今天打八折，所有菜单有一个新价格
    const newPrice = [];
    people.forEach(function (obj, index) {
        newPrice[index] = {
            ...obj,
            new_price: obj.price * 0.8
        }
    })
    //方法2：产生一个新的的阵列
    const newOrders = people.map( (obj, index) =>(
        {
            ...obj,
            new_price: obj.price * 0.8
        }
    ))
    console.log(newOrders)

    

    //3.消费满80免费送鸡蛋
    const newOrder = [];
    people.forEach(function (obj, index) {
        if (obj.price >= 80) {
            newOrder.push(obj)
        }
    })
// 
    const newOrder4 = people.filter(function (obj, index) {
        return item.price >= 80
    })
    //
    const newOrder3 = people.filter((item) => item.price >= 80)
    console.log(newOrder3)
    
    

    //4.红烧鱼今天卖完了换成红烧肉=》找到点红烧鱼的人=>找到索引位置
    let key = 0;
    people.forEach(function (obj, index) {
        if (obj.order === "红烧鱼") {
            key = index;
        }
    })
    console.log(people[key])
    people[key].order = "红烧肉"
    console.log(people[key]);

    // 方式二：
    const index = people.findIndex(function(item) {
        return item.order === "红烧鱼"
    })
    people[index].order = "红烧鱼"
    console.log(people[index]);

    //
    

    //5.今天POS机坏了，麻烦帮忙出一下li结构，方便打印结构
    let template = ''
    people.forEach(function (obj, index) {
        template = template + `<li>
    ${obj.order},${obj.price}
    </li> `
    })
    console.log(template);

    const html = people.map(function (obj,key){

    return `<li>${obj.order},${obj.price}</li> `
    
    }).join('')
    console.log(html);

    //6.要结账了，收钱收多少呢？
    let total = 0;
    people.forEach(function (obj, key) {
        total += obj.price;
    })
    console.log(total);

    // 
    let 

    //7.看看今天的进账，最高消费金额是多少？