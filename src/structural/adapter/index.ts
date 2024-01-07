class SellerInvoice {
  printJSON() {
    console.log("Print in JSON format")
  }
}

class DistributorInvoice {
  printXML() {
    console.log("Print in XML format")
  }
}

class AdapterDistributerInvoice extends SellerInvoice {
  private invoice: DistributorInvoice

  constructor(invoice: DistributorInvoice) {
    super()
    this.invoice = invoice
  }

  printJSON() {
    const distributorInvoice = this.invoice.printXML()

    console.log("This format has been translated")
  }
}

const invoice = new SellerInvoice()
invoice.printJSON()

const distributorInvoice = new DistributorInvoice()
const invoice2 = new AdapterDistributerInvoice(distributorInvoice)
invoice2.printJSON()