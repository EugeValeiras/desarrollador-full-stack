import * as productTypes from './product.type';
import {updateObject} from "../utility";

const initialState = {
    products: [
        {
            "id": "1",
            "title": "Pear!",
            "img": "data:image/jpeg;base64,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",
            "description": "This is an awesome Pear!"
        },
        {
            "id": "2",
            "title": "Banana",
            "img": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAKAAoAMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwQBAgUGB//EADcQAAEDAgQEBAIJBAMAAAAAAAEAAgMEEQUSITETQVFhBiIycVKRIzNygaGxwdHwFRZCohRDYv/EABsBAQACAwEBAAAAAAAAAAAAAAADBAECBQYH/8QALBEAAgICAgECBAcBAQEAAAAAAAECAwQREjEhBUETIjJRFHGBobHB0WE0Ff/aAAwDAQACEQMRAD8A+4oAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIDF0AugF0AugF0AugF0AugF0AugF0AugF0AugF0AugF0AugF0AugMIAgCAE2QEUNRDO0Ohka8EXBadwtIzjLpmWmuyVbmAgCAIAgCAIAgCAIAgCAIAgCAIAgCA53iEkYTOGn1WafYkLm+r2Srw5yi9Px/JPjpO1bObgk54IZc5o9B7Lyfp+RKEtJ+S7kV68noIn52g8+YXtcbIV0d+5zZR0zdWTUIAgCAIAgCAIAgI6iVsMTpHvYwAE5nusB7lYbS7MpbPkX99+I5WMmfPHT31czgNDR211VN5LUtLydBYkXHye68JeJhjNO3jObxBZrtLEO7joeRU8bk+yvbjuPlHp1MVggCAIDGdubLmGa17X1QHN8REjC325ub+a4/rn/il+a/ks4i3ajz1HKYZWvG3NeGjPhJM684co6PTU0gIaQd9l6jDyNNSiciyJOyobmyP8rguxV6hBy4WeGROt62icEHUG6vxlGS2nsjC2AQBAEAQBAR1E8VPE6WZ4awcyorr66YOc3pIyk29I+e+LsR/qxZELtjY76Nl/Uep7rzF3qU8ifhfL7L+zo49XDyzwVex01c+mvYNdbe+vPVdWC4x37ltvkem8L0ssNcZKZpIIyzEnS3+I97qP43Hvr+zWxpR0fVMNZUR0cbauQSTAauAt7Lr1KXBcuzjzacnx6LKkNAgNXnK0u6C61k9LYR5OlrZRVuqnOJLzc3/my+ff8A1MhZDu35/r7HY/DxdfE7dZIyvw2RrT5i3MB1tqvR2ZdXqGHKEfq11/1FKuLpuTZ5phC8XI7OtHXwqo8pjcdRtddHAyOPyS/QoZNfnaOjUNMkYcw+Yajv2XVyYStr3D6kU4PjLTMUk9hv9yzhZkodP9Da2svteHBeloyIWx8PyVWtGysGAgCAICrXV0NFFnmdqfS0buVTLzasWHKb/T3N4QlN+DxOO4tNVS+c5QPTGDoF47JzLcuzlPr2X2OhVSoo5mHxcerEpsWx6knm7kEqXzEsvsiem8PUbTI9zB5yXyPfqTzKtX5Ft0kk9JGVPij1mA4bCYoZY4+FDHqyNoABPUroelUStaunJvRSvsafE9AvRFMIAgI6l2Wnld0YT+ChvfGqT+yZtH6keMidZfMGjvHSo5uE6x9BPyKt4t3w++n+xWthy/Mp4hSmkkEkesDv9Ss5FHHyumT0W/EXF9msTi0hzdxsqW9M3kk/DO5QVQmYB/kNwu9g5SnHi+zm3VOLMVLHRP4zPQ71Acu6zkUyrl8WHT7QrkpLi+yanqLtBBuFNj5XTizSdfkvRyhw1XocfOjNan2VpR0SLoLyaEU08cPqdr0CguyK6vqZvGEpdFGaslffI7ht7alcu3Nts8Q8fyWI0xXfk4GMfQsdO8ue7lmNyVwMjHafObb/AD8lqEfZHkpppJ5NPW8/JRJaJWehoKUQRRwj1HUqauP39zT/AKWq7QMhZoZpRGPst1d8zZLV3/16/wB/c1XZ62ij4dNG3bRetwa1CiKObY9ybJ1cNAgCAw8BzS07EWWso8k0wuzxM8TqeokidpkdZfNcqh0XSrfszu1TUopk8UmllXg9PRlr3LkT/KWOGeM6EHkr9O4rXcSvKPna8MrTUhh80RMkXbUt91FfjNfNDyiaF3LxLwzSN5Y4OabEKmm4vaN5RUl5OnTYiALS6d11cf1Lj4sKVmP7o3dFE48SmkawnXLyKnlVTa+dE9P9jVSkvlmtm7ZXR6PIv0abqer4sfEtfozDipdGX1slsrTlV+GRbGPFMwqI9srFw1cTr7qPt7ZKkQyVLWXudlHZeoeSRQbOVXVjJ2lp1B2C59uUrI6RPGvXkxhWCvMhnms038je3UqanDlNJshsmvY7ENC6Kdr9SArCx5Vy37EEppoovgd/V6CFxvw4MxJ5knX8lXmkp1xNk/kkz18f1bbdF7GnXw46Oa+zZSmAgCAIDi+IKHiNFRGNW+vuOq8767gO2Px4drsu4l3F8GcBpymy8a0dNMsRTEHdbQslBmJRTLTJuYNir8LU/JC4GSI36uY2/W1ipXXXZ9SMaa6MCKI7g/MrCw6DLlI3DY2bBWK8amHlRNXyZq6UN2U/PRlRInT23Kw7NGeJXlqbC5OigsyNI3UDlVtbofMQ0KlJysZMlot4RRucBVVTbX+rjPLue6v4+Oo/MyGye/CO0H5eyvcmiDWy7SzhwAKnqu5LyQWw0V6+JrK+mqOzmfqufnarsrn7bN6fmhJHZgddtgvR4U9x4lGa8kqvGgQBAEBhwDmkOFwRqFhpNaYT0eVxmjNHJxB9S46Hp2XjPV/TPgt2w6OpjX81p9nPY7NsuA1ouEzJCN1vCfENEomVuNqZpxNxKrKmY0aukWfiaGiN0i1ldozoryTAcrqCWR9jdROfVVNmkuKiinJ+TdLRJheGvqZG1VW0iMaxxkeruV0KakiGyfsjvE2GqurwiEgfMAbXVa69RJIxLlDJmkaFmi1ykkiO6OkSYs/ywjmXkhY9WlqEF77NMZeWdSgcXNb9ldv0uTet/Yp3JIuLtFcIAgCAo4zUyUuGzyw24lrNJ5Em11Sz8l42PKxIkqhzmkeWinn4bwZHTMf62zOLg7+dl4peqZCm5TlvfafR1VRDXWmc6Zk9M8uhjLo76NzXIUEpVWPx4LCT15MwYjHIS0us4btOllHKiSM6LTahpWq5RMaN+OFv8WRjiauqAsOybMqJXlqgNyii5GdFN1U6aThQMdJJzDeX7KeFL7Yb0X6DCchE9cQ941bHu1vv1KtwgkRSk2dR8wGt1NzSNOLKk1SSbA7Ktbl+yJIwIQ4uN7rnzm5PbJUtHbwyJzITIR5naNBXZ9Npkoux+/RSyJpvRpOf+RWZWm7I/KD1PNV8l/iMjiuo+DatcK9vtndomZI9eey9b6fVwhs5l0tyLK6BEEAQBAVMUh49BPHzLbj3Gv6Kj6lT8bFnBd6/jz/RJTLjYmePZZuoC+dPydtEuZrvUtdaNkVqnD4qg3e0E9RyU0LpR6M7KTsNmiP0NQ8DkHaqb48X9SBoYMQGjXxO9wQs8qX9wbMoq9580sbfYErPOv2Q2WYsFY45quZ0na9gpYuXstGjkdKGOGmjDII2saOilWvc08s0kmtzWsrkkZUSs+QuKpzuciRI1DblQ7Ni/Q0ZmdmdowblXMTGd8tvohtt4rS7OhVVHAjDWaPIs0DkOq6mXkqivjDt9f6Vq6+b2+iXC6M6Ej3K39KwJSfJmuTcjttAAsF6yMVFaRzWZWwCAIAgB1CA8diNKaSqfGfTe7e4Xzz1LFeNe4+3a/I7VFinBMqc1zydM2DnDmhk24jlgeBnd1HyWxjRnO74lspa9zBgyG2il/EPWkOJG57uq0djNtI1sStHLZkyGrGzBbpqUv8AM8WZ+at42K7XuXhEc7NeEXZahlO1rGC7+TP3XVtyK8aHFd/b+2V41ux7fRLh9DLUSGabW/MhPT/T7Mqz41prffGC4xO9GwRtytFgvX11xrjxijmSk29s2W5gIAgCAIAgKeJUDK2HKfLIPS7ouf6hgQzK+L8P2ZLTc6ntHlKiGSmlMVQzI8ddiOxXhsnEtxp8bF/h167IzXysiuquiXYumjOxmTQM3QGCgM2ugN2MLjZouVlRcnpIN6JBwYHASuBk+AFXqceMX8/lkbk30XIoK+r+oibGz43PGnsLrrQxMq1arjpfdtFd21Q+pnRocEjhdxJ3mV6v4vocIS53vk/2K1ubKS4xWkdZrQ1uVosOgXdjFRWoopttvbMrYwEAQBAEAQBAEBBVwwTxZKljXM6OUN1VdseNi2jaEpRe4nl8Tw+CC7qSaU/+HsJ/FeazPRq15pl+jOhVkyf1o4xqMps8FpHULi2YdsPqiXFNMCqZf1j5qB1tG6ZuJ2/EFrwM7NuO34h80VUn0hsyKhp2a956MH6q5V6fZLtGjmiXhV1U3KwcBh5M3P3rqVenteCF2pFijwAMdmNyepVyv06KIpZB6CipnQAZCulTS6+irZZy7OmwkjVXovZWaNlsYCAIAgCAIAgCAIDQsBOoWNAjdTMfu0LVx2ZTKs2FwS7satHRF+xurGilL4cpH/8AW35KCWHW/YlV8kQf2xTA+VlvZRvAr+xt+JkTReHYGbNW0cOC6MPIZdiwmBg9Iup448URu5lllIxmzQt1Wkac2TCNo5LZRMcmbZR0W2ka7MrICAIAgCAIDNkAsgFkAsgFkAsgMWQCyAWQGbIBZALIBZALIBZALIBZALIBZALIDKAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCA/9k=",
            "description": "This is a BANANA!"
        }
    ]
};

const editProduct = (state, product) => {
    const newProductList =  state.products.map((productInState) => {
        if (product.id === productInState.id) {
            return product;
        }
        return productInState;
    });

    return updateObject( state, { products: newProductList } );
};

const addProducts = (state, payload) => {
    const newProductList = [...state.products, payload];
    return updateObject( state, { products: newProductList } );
};

const removeProducts = (state, productId) => {
    const newProductList = state.products.filter(product => product.id !== productId);
    return updateObject( state, { products: newProductList } );
};

const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case productTypes.EDIT_PRODUCT: return editProduct(state, payload);
        case productTypes.ADD_PRODUCT: return addProducts(state, payload);
        case productTypes.REMOVE_PRODUCT: return removeProducts(state, payload.productId);
        default:
            return state;
    }
};

export default reducer;