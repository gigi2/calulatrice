//mfichier de configuration
var conf= {
	application:"calculator",
	version:12,
	modules: [
		{
			name: "calculatrice",
			rootpath: "js/lib/calculator/",
			version:"v-02",
			src:[
				"calculator-events-v-02.js",
				"calculator-core-v-02.js"],
			active:true
		},
		{
			name: "science",
			rootpath: "js/lib/v1/",
			version:"v-01",
			src:[
				"calculator-events-v-01.js",
				"calculator-core-v-01.js",],
			active: false
		}

			]

}

