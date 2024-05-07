let {Busdetails,busdetails1,busdetails2,busdetails3}= require("../Model/BusModel");


async function checkSeat(req,res) {
let seat=req.body.Busdata.seat;
let from=req.body.from;
let bus= req.body.Busdata.Bus;
let date=req.body.dates;

    if (bus == 1 && from === "pudukkottai") {
    
        let seatBook = [];
        let seatFree = [];
        try {
            const bus1 = await busdetails1.find({"dates": date, "from": from});
            if (bus1.length === 0) {
                for (let i = 1; i <= seat; i++) {
                    seatFree.push(true);
                }
                return res.send({ seatAvailable: seatFree, Bus: 1 });
            }
            for (let i = 1; i <= seat; i++) {
                seatFree.push(true);
            }
                bus1.map((data) => {
                    let seat = data.seat;
                    seatBook.push(seat);
                    return data;
                });
                for (let i = 0; i < seatBook.length; i++) {
                    let seatValue = seatBook[i]-1;
                    seatFree.splice(seatValue, 1, false);
                }
                let seatfrees=[...seatFree]
                return res.send({ seatAvailable: seatfrees, Bus: 1 });
        } catch (error) {
            // Handle error
            return res.status(500).send("Internal Server Error");
        }
        
    }else if (bus == 1 && from === "chennai") {
        
            let seatBook = [];
            let seatFree = [];
            try {
                const bus1 = await busdetails1.find({"dates": date, "from": from});
                if (bus1.length === 0) {
                    for (let i = 1; i <= seat; i++) {
                        seatFree.push(true);
                    }
                    return res.send({ seatAvailable: seatFree, Bus: 1 })
                }
                for (let i = 1; i <= seat; i++) {
                    seatFree.push(true);
                }
                    bus1.map((data) => {
                        let seat = data.seat;
                        seatBook.push(seat);
                        return data;
                    });
                    for (let i = 0; i < seatBook.length; i++) {
                        let seatValue = seatBook[i]-1;
                        seatFree.splice(seatValue, 1, false);
                    }
                    return res.send({ seatAvailable: seatFree, Bus: 1 });
            } catch (error) {
                // Handle error
                return res.status(500).send("Internal Server Error");
            }
            
        }else if (bus == 2 && from === "pudukkottai") {
        
            let seatBook = [];
            let seatFree = [];
            try {
                const bus1 = await busdetails2.find({"dates": date, "from": from});
                if (bus1.length === 0) {
                    for (let i = 1; i <= seat; i++) {
                        seatFree.push(true);
                    }
                    return res.send({ seatAvailable: seatFree, Bus: 1 })
                }
                for (let i = 1; i <= seat; i++) {
                    seatFree.push(true);
                }
                    bus1.map((data) => {
                        let seat = data.seat;
                        seatBook.push(seat);
                        return data;
                    });
                    for (let i = 0; i < seatBook.length; i++) {
                        let seatValue = seatBook[i]-1;
                        seatFree.splice(seatValue, 1, false);
                    }
                    return res.send({ seatAvailable: seatFree, Bus: 2 });
            } catch (error) {
                // Handle error
                return res.status(500).send("Internal Server Error");
            }
            
        }else if (bus == 2 && from === "chennai") {
        
            let seatBook = [];
            let seatFree = [];
            try {
                const bus1 = await busdetails2.find({"dates": date, "from": from});
                if (bus1.length === 0) {
                    for (let i = 1; i <= seat; i++) {
                        seatFree.push(true);
                    }
                    return res.send({ seatAvailable: seatFree, Bus: 2 })
                }
                for (let i = 1; i <= seat; i++) {
                    seatFree.push(true);
                }
                    bus1.map((data) => {
                        let seat = data.seat;
                        seatBook.push(seat);
                        return data;
                    });
                    for (let i = 0; i < seatBook.length; i++) {
                        let seatValue = seatBook[i]-1;
                        seatFree.splice(seatValue, 1, false);
                    }
                    return res.send({ seatAvailable: seatFree, Bus: 1 });
            } catch (error) {
                // Handle error
                return res.status(500).send("Internal Server Error");
            }
            
        }else if (bus == 3 && from === "pudukkottai") {
        
            let seatBook = [];
            let seatFree = [];
            try {
                const bus1 = await busdetails3.find({"dates": date, "from": from});
                if (bus1.length === 0) {
                    for (let i = 1; i <= seat; i++) {
                        seatFree.push(true);
                    }
                    return res.send({ seatAvailable: seatFree, Bus: 1 })
                }
                for (let i = 1; i <= seat; i++) {
                    seatFree.push(true);
                }
                    bus1.map((data) => {
                        let seat = data.seat;
                        seatBook.push(seat);
                        return data;
                    });
                    for (let i = 0; i < seatBook.length; i++) {
                        let seatValue = seatBook[i]-1;
                        seatFree.splice(seatValue, 1, false);
                    }
                    return res.send({ seatAvailable: seatFree, Bus: 1 });
            } catch (error) {
                // Handle error
                return res.status(500).send("Internal Server Error");
            }
            
        }else if (bus == 3 && from === "chennai") {
        
            let seatBook = [];
            let seatFree = [];
            try {
                const bus1 = await busdetails3.find({"dates": date, "from": from});
                if (bus1.length === 0) {
                    for (let i = 1; i <= seat; i++) {
                        seatFree.push(true);
                    }
                    return res.send({ seatAvailable: seatFree, Bus: 1 })
                }
                for (let i = 1; i <= seat; i++) {
                    seatFree.push(true);
                }
                    bus1.map((data) => {
                        let seat = data.seat;
                        seatBook.push(seat);
                        return data;
                    });
                    for (let i = 0; i < seatBook.length; i++) {
                        let seatValue = seatBook[i]-1;
                        seatFree.splice(seatValue, 1, false);
                    }
                    return res.send({ seatAvailable: seatFree, Bus: 1 });
            } catch (error) {
                // Handle error
                return res.status(500).send("Internal Server Error");
            }
            
        }
}

module.exports = checkSeat;