const courses = [
	{
		course_no: 'BIO F211',
		course_title: 'BIOLOGICAL CHEMISTRY'
	},
	{
		course_no: 'BIO F491',
		course_title: 'SPECIAL PROJECT'
	},
	{
		course_no: 'BIO F212',
		course_title: 'MICROBIOLOGY'
	},
	{
		course_no: 'BIO G526',
		course_title: 'CANCER BIOLOGY'
	},
	{
		course_no: 'BITS F315',
		course_title: 'INTRODUCTION TO COGNITIVE\nNEUROSCIENCE'
	},
	{
		course_no: 'BIO F313',
		course_title: 'ANIMAL PHYSIOLOGY'
	},
	{
		course_no: 'BIO G612',
		course_title: 'HUMAN GENETICS'
	},
	{
		course_no: 'BIO F214',
		course_title: 'INTEGRATED BIOLOGY'
	},
	{
		course_no: 'BIO G661',
		course_title: 'GENE TOXICOLOGY'
	},
	{
		course_no: 'BIOT F346',
		course_title: 'GENOMICS'
	},
	{
		course_no: 'BITS C790T',
		course_title: 'INDEPENDENT STUDY'
	},
	{
		course_no: 'BITS C791T',
		course_title: 'TEACHING PRACTICE I'
	},
	{
		course_no: 'BITS C797T',
		course_title: 'PH D SEMINAR'
	},
	{
		course_no: 'BITS C799T',
		course_title: 'PH D THESIS'
	},
	{
		course_no: 'BITS E573',
		course_title: 'STUDY IN ADVANCED TOPICS I'
	},
	{
		course_no: 'BIO F217',
		course_title: 'LABORATORY FOR WATER, SANITATION AND SOLID WASTE\nMANAGEMENT'
	},
	{
		course_no: 'BITS E583',
		course_title: 'CASE STUDIES I'
	},
	{
		course_no: 'BITS E661',
		course_title: 'RESEARCH METHODOLOGY I'
	},
	{
		course_no: 'BITS E793T',
		course_title: 'PRACTICE LECT SERIES I'
	},
	{
		course_no: 'BIO F367',
		course_title: 'LABORATORY PROJECT'
	},
	{
		course_no: 'BIO F376',
		course_title: 'DESIGN PROJECT'
	},
	{
		course_no: 'BIO F417',
		course_title: 'BIOMOLECULAR MODELLING'
	},
	{
		course_no: 'BITS F382',
		course_title: 'READING COURSE'
	},
	{
		course_no: 'BITS F417',
		course_title: 'MICRO-FLUIDICS & ITS APP'
	},
	{
		course_no: 'BITS F437',
		course_title: 'TECHNICAL COMMUNICATION'
	},
	{
		course_no: 'BITS F462',
		course_title: 'RENEWABLE ENERGY'
	},
	{
		course_no: 'BIO F366',
		course_title: 'LABORATORY PROJECT'
	},
	{
		course_no: 'BIO G525',
		course_title: 'ENVIRONMENTAL BIOTECH & WASTE\nMANAGEMENT'
	},
	{
		course_no: 'BIO F377',
		course_title: 'DESIGN PROJECT'
	},
	{
		course_no: 'BIO G514',
		course_title: 'MOLECULAR IMMUNOLOGY'
	},
	{
		course_no: 'BIO G510',
		course_title: 'APPLICATION OF COMPUTERS AND\nSTATISTICS IN BIOLOGY'
	},
	{
		course_no: 'BIO G512',
		course_title: 'MOLEC MECH OF GENE EXPRE'
	},
	{
		course_no: 'BIO G523',
		course_title: 'ADV & APPLIED MICROBIO'
	},
	{
		course_no: 'BIO F216',
		course_title: 'WATER, SANITATION AND SOLID WASTE\nMANAGEMENT'
	},
	{
		course_no: 'BITS F316',
		course_title: 'NONLINEAR DYNAMICS AND CHAOS'
	},
	{
		course_no: 'BIO F311',
		course_title: 'RECOMBINANT DNA TECH'
	},
	{
		course_no: 'BITS F463',
		course_title: 'CRYPTOGRAPHY'
	},
	{
		course_no: 'BIO G515',
		course_title: 'STEM CELL AND REGENERATIVE\nBIOLOGY'
	},
	{
		course_no: 'BIO F213',
		course_title: 'CELL BIOLOGY'
	},
	{
		course_no: 'BIO F312',
		course_title: 'PLANT PHYSIOLOGY'
	},
	{
		course_no: 'BITS F225',
		course_title: 'ENVIRONMENTAL STUDIES'
	},
	{
		course_no: 'BITS F467',
		course_title: 'BIOETHICS AND BIOSAFETY'
	},
	{
		course_no: 'BITS G511',
		course_title: 'ADVANCED PROJECT'
	},
	{
		course_no: 'CS F342',
		course_title: 'COMPUTER ARCHITECTURE'
	},
	{
		course_no: 'CHEM F312',
		course_title: 'PHYSICAL CHEMISTRY IV'
	},
	{
		course_no: 'CHE F433',
		course_title: 'CORROSION ENGINEERING'
	},
	{
		course_no: 'CS F301',
		course_title: 'PRINCIPLES OF PROGG LANG'
	},
	{
		course_no: 'CHEM F311',
		course_title: 'ORGANIC CHEMISTRY III'
	},
	{
		course_no: 'CHEM F313',
		course_title: 'INSTRU METHODS OF ANAL'
	},
	{
		course_no: 'CHE F314',
		course_title: 'PROCESS DESIGN PRINCIPLES I'
	},
	{
		course_no: 'CHE F366',
		course_title: 'LABORATORY PROJECT'
	},
	{
		course_no: 'CHE F367',
		course_title: 'LABORATORY PROJECT'
	},
	{
		course_no: 'CHE F376',
		course_title: 'DESIGN PROJECT'
	},
	{
		course_no: 'CHE F415',
		course_title: 'MOLECULAR AND STATISTICAL\nTHERMODYNAMICS'
	},
	{
		course_no: 'CHE F416',
		course_title: 'PROCESS PLANT DESIGN PROJECT I'
	},
	{
		course_no: 'CHE F417',
		course_title: 'PROCESS PLANT DESIGN PROJECT II'
	},
	{
		course_no: 'CHE F311',
		course_title: 'KINETICS & REACTOR DESIGN'
	},
	{
		course_no: 'CHE F491',
		course_title: 'SPECIAL PROJECTS'
	},
	{
		course_no: 'CHE G523',
		course_title: 'MATHEMATICAL\nMETHODS IN CHEMICAL ENGINEERING'
	},
	{
		course_no: 'CHE G528',
		course_title: 'INTRODUCTION TO\nNANOSCIENCE & TECHNOLOGY'
	},
	{
		course_no: 'CHE G613',
		course_title: 'ADVANCED MASS TRANSFER'
	},
	{
		course_no: 'CHEM F366',
		course_title: 'LABORATORY PROJECT'
	},
	{
		course_no: 'CHE F312',
		course_title: 'CHEMICAL ENGINEERING LABORATORY I'
	},
	{
		course_no: 'CHEM F367',
		course_title: 'LABORATORY PROJECT'
	},
	{
		course_no: 'CHEM F376',
		course_title: 'DESIGN PROJECT'
	},
	{
		course_no: 'CHEM F377',
		course_title: 'DESIGN PROJECT'
	},
	{
		course_no: 'CHEM F491',
		course_title: 'SPECIAL PROJECT'
	},
	{
		course_no: 'CS F215',
		course_title: 'DIGITAL DESIGN'
	},
	{
		course_no: 'CS F266',
		course_title: 'STUDY PROJECT'
	},
	{
		course_no: 'CS F314',
		course_title: 'SOFTWARE DEVELOPMENT FOR\nPORTABLE DEVICES'
	},
	{
		course_no: 'CHE F213',
		course_title: 'CHEM ENGG THERMODYNAMICS'
	},
	{
		course_no: 'BITS G513',
		course_title: 'STUDY IN ADVANCED TOPICS'
	},
	{
		course_no: 'BITS G518',
		course_title: 'WRITING SEMINAR'
	},
	{
		course_no: 'BITS G529',
		course_title: 'RESEARCH PROJECT I'
	},
	{
		course_no: 'BITS G553',
		course_title: 'REAL TIME SYSTEMS'
	},
	{
		course_no: 'BITS G561T',
		course_title: 'DISSERTATION'
	},
	{
		course_no: 'BITS G562T',
		course_title: 'DISSERTATION'
	},
	{
		course_no: 'BITS G563T',
		course_title: 'DISSERTATION'
	},
	{
		course_no: 'BITS G619',
		course_title: 'PROFESSIONAL PRACTICE'
	},
	{
		course_no: 'BITS G629T',
		course_title: 'DISSERTATION'
	},
	{
		course_no: 'BITS G649',
		course_title: 'READING COURSE'
	},
	{
		course_no: 'BITS G654',
		course_title: 'ADV INSTRUMENTATION TECH'
	},
	{
		course_no: 'CS F366',
		course_title: 'LABORATORY PROJECT'
	},
	{
		course_no: 'CS F367',
		course_title: 'LABORATORY PROJECT'
	},
	{
		course_no: 'CHE F422',
		course_title: 'PETROLEUM REFINING TECHNOLOGY'
	},
	{
		course_no: 'CHEM F337',
		course_title: 'GREEN CHEMISTRY AND CATALYSIS'
	},
	{
		course_no: 'CHE F421',
		course_title: 'BIO-CHEMICAL ENGINEERING'
	},
	{
		course_no: 'CHEM F213',
		course_title: 'PHYSICAL CHEMISTRY II'
	},
	{
		course_no: 'CHEM F211',
		course_title: 'PHYSICAL CHEMISTRY I'
	},
	{
		course_no: 'CHE F212',
		course_title: 'FLUID MECHANICS'
	},
	{
		course_no: 'CHE F211',
		course_title: 'CHEMICAL PROCESS CALCULA'
	},
	{
		course_no: 'CHEM F266',
		course_title: 'STUDY PROJECT'
	},
	{
		course_no: 'CHE F214',
		course_title: 'ENGG CHEMISTRY'
	},
	{
		course_no: 'CHE F266',
		course_title: 'STUDY PROJECT'
	},
	{
		course_no: 'CHEM F414',
		course_title: 'BIO AND CHEMICAL SENSORS'
	},
	{
		course_no: 'CHEM F214',
		course_title: 'INORGANIC CHEMISTRY I'
	},
	{
		course_no: 'CS F222',
		course_title: 'DISCR STRUC FOR COMP SCI'
	},
	{
		course_no: 'CS F351',
		course_title: 'THEORY OF COMPUTATION'
	},
	{
		course_no: 'ECE F431',
		course_title: 'MOBILE\nTELECOMMUNICATION NETWORKS'
	},
	{
		course_no: 'EEE F313',
		course_title: 'ANALOG & DIGIT VLSI DES'
	},
	{
		course_no: 'ECON F312',
		course_title: 'MONEY BANK & FIN MARKETS'
	},
	{
		course_no: 'EEE F422',
		course_title: 'MODERN CONTROL SYSTEMS'
	},
	{
		course_no: 'CHE F414',
		course_title: 'TRANSPORT PHENOMENA'
	},
	{
		course_no: 'ECE F311',
		course_title: 'COMMUNICATION SYSTEMS'
	},
	{
		course_no: 'EEE F212',
		course_title: 'ELECTROMAGNETIC THEO'
	},
	{
		course_no: 'ECON F212',
		course_title: 'FUNDAMENTALS OF FINANCE & ACCOUNTS'
	},
	{
		course_no: 'ECE F434',
		course_title: 'DIGITAL SIGNAL PROCESSING'
	},
	{
		course_no: 'ECE F314',
		course_title: 'ELECTROMAGNETIC FIEDL & MICROWAVE\nENGG'
	},
	{
		course_no: 'ECON F376',
		course_title: 'DESIGN PROJECT'
	},
	{
		course_no: 'ECON F377',
		course_title: 'DESIGN PROJECT'
	},
	{
		course_no: 'ECON F491',
		course_title: 'SPECIAL PROJECT'
	},
	{
		course_no: 'EEE F266',
		course_title: 'STUDY PROJECT'
	},
	{
		course_no: 'EEE F366',
		course_title: 'LABORATORY PROJECT'
	},
	{
		course_no: 'DE G531',
		course_title: 'PRODUCT DESIGN'
	},
	{
		course_no: 'CS F376',
		course_title: 'DESIGN PROJECT'
	},
	{
		course_no: 'CS F377',
		course_title: 'DESIGN PROJECT'
	},
	{
		course_no: 'CS G520',
		course_title: 'ADVANCED DATA MINING'
	},
	{
		course_no: 'CS G526',
		course_title: 'ADVANCED ALGORITHMS AND\nCOMPLEXITY'
	},
	{
		course_no: 'CS G541',
		course_title: 'PERVASIVE COMPUTING'
	},
	{
		course_no: 'CS G553',
		course_title: 'RECONFIGURABLE COMPUTING'
	},
	{
		course_no: 'CS G623',
		course_title: 'ADVANCED OPERATING SYSTEMS'
	},
	{
		course_no: 'DE G611',
		course_title: 'DYNAMICS & VIBRATION'
	},
	{
		course_no: 'DE G631',
		course_title: 'MATERIALS TECH & TESTING'
	},
	{
		course_no: 'ECE F266',
		course_title: 'STUDY PROJECT'
	},
	{
		course_no: 'ECE F366',
		course_title: 'LABORATORY PROJECT'
	},
	{
		course_no: 'ECE F367',
		course_title: 'LABORATORY PROJECT'
	},
	{
		course_no: 'ECE F376',
		course_title: 'DESIGN PROJECT'
	},
	{
		course_no: 'ECE F377',
		course_title: 'DESIGN PROJECT'
	},
	{
		course_no: 'ECE F491',
		course_title: 'SPECIAL PROJECT'
	},
	{
		course_no: 'ECON F266',
		course_title: 'STUDY PROJECT'
	},
	{
		course_no: 'ECON F366',
		course_title: 'LABORATORY PROJECT'
	},
	{
		course_no: 'ECON F367',
		course_title: 'LABORATORY PROJECT'
	},
	{
		course_no: 'EEE F367',
		course_title: 'LABORATORY PROJECT'
	},
	{
		course_no: 'EEE F377',
		course_title: 'DESIGN PROJECT'
	},
	{
		course_no: 'EEE F418',
		course_title: 'MODERN COMMUNICATION\nTECHNOLOGIES'
	},
	{
		course_no: 'EEE F427',
		course_title: 'ELECTRIC POWER UTILIZATION AND\nILLUMINATION'
	},
	{
		course_no: 'ECE F215',
		course_title: 'DIGITAL DESIGN'
	},
	{
		course_no: 'EEE F376',
		course_title: 'DESIGN PROJECT'
	},
	{
		course_no: 'ECE F418',
		course_title: 'MODERN COMMUNICATION\nTECHNOLOGIES'
	},
	{
		course_no: 'EEE F416',
		course_title: 'DIGITAL COMMUNICATION'
	},
	{
		course_no: 'ECE F214',
		course_title: 'ELECTRONIC DEVICES'
	},
	{
		course_no: 'CS F429',
		course_title: 'NATURAL LANGUAGE PROCESSING'
	},
	{
		course_no: 'ECE F212',
		course_title: 'ELECTROMAGNETIC THEO'
	},
	{
		course_no: 'CS G518',
		course_title: 'INTERNET OF THINGS: DESIGN & DEVELP'
	},
	{
		course_no: 'ECON F415',
		course_title: 'NEW VENTURE CREATION'
	},
	{
		course_no: 'ECON F354',
		course_title: 'DERIVATIVES & RISK MANAGEMENT'
	},
	{
		course_no: 'EEE F311',
		course_title: 'COMMUNICATION SYSTEMS'
	},
	{
		course_no: 'ECON F315',
		course_title: 'FINANCIAL MANAGEMENT'
	},
	{
		course_no: 'ECE F416',
		course_title: 'DIGITAL COMMUNICATION'
	},
	{
		course_no: 'ECON F412',
		course_title: 'SECURITY ANALYSIS AND PORTFOLIO MANAGEMENT'
	},
	{
		course_no: 'CS F372',
		course_title: 'OPERATING SYSTEMS'
	},
	{
		course_no: 'ECON F214',
		course_title: 'ECONOMIC ENV OF BUSINESSS'
	},
	{
		course_no: 'EEE F215',
		course_title: 'DIGITAL DESIGN'
	},
	{
		course_no: 'INSTR F214',
		course_title: 'ELECTRONIC DEVICES'
	},
	{
		course_no: 'MATH F212',
		course_title: 'OPTIMISATION'
	},
	{
		course_no: 'MATH F312',
		course_title: 'ORDINARY DIFFERENTIAL\nEQUATIONS'
	},
	{
		course_no: 'HSS F234',
		course_title: 'MAIN CURRENTS OF MODERN HISTORY'
	},
	{
		course_no: 'ECON F213',
		course_title: 'MATHEMATIC & STAT METHOD'
	},
	{
		course_no: 'HSS F374',
		course_title: 'URBAN MODERNITY AND THE RENEWAL OF PARIS'
	},
	{
		course_no: 'FIN F311',
		course_title: 'DERIVATIVES & RISK MANAGEMENT'
	},
	{
		course_no: 'GS F332',
		course_title: 'CONTEMPORARY INDIA'
	},
	{
		course_no: 'MATH F311',
		course_title: 'INTRODUCTION TO TOPOLOGY'
	},
	{
		course_no: 'HSS G512',
		course_title: 'THEORETICAL APRCHS TO LIB STDS'
	},
	{
		course_no: 'INSTR F266',
		course_title: 'STUDY PROJECT'
	},
	{
		course_no: 'INSTR F366',
		course_title: 'LABORATORY PROJECT'
	},
	{
		course_no: 'INSTR F367',
		course_title: 'LABORATORY PROJECT'
	},
	{
		course_no: 'INSTR F376',
		course_title: 'DESIGN PROJECT'
	},
	{
		course_no: 'INSTR F377',
		course_title: 'DESIGN PROJECT'
	},
	{
		course_no: 'INSTR F473',
		course_title: 'WIND ELECTRICAL SYSTEM'
	},
	{
		course_no: 'INSTR F491',
		course_title: 'SPECIAL PROJECT'
	},
	{
		course_no: 'EEE F432',
		course_title: 'MEDICAL INSTRUMENTATION'
	},
	{
		course_no: 'EEE F434',
		course_title: 'DIGITAL SIGNAL PROCESSING'
	},
	{
		course_no: 'EEE F473',
		course_title: 'WIND ELECTRICAL SYSTEM'
	},
	{
		course_no: 'EEE F491',
		course_title: 'SPECIAL PROJECT'
	},
	{
		course_no: 'EEE G510',
		course_title: 'RF MICROELECTRONICS'
	},
	{
		course_no: 'EEE G547',
		course_title: 'DEVICE DRIVERS'
	},
	{
		course_no: 'EEE G626',
		course_title: 'HARDWARE SOFTWARE CO-DESIGN'
	},
	{
		course_no: 'EEE G627',
		course_title: 'NETWORKED EMBEDDED APPLICATIONS'
	},
	{
		course_no: 'CS F425',
		course_title: 'DEEP LEARNING'
	},
	{
		course_no: 'HSS F227',
		course_title: 'CROSS CULTURAL SKILLS'
	},
	{
		course_no: 'HSS F266',
		course_title: 'STUDY PROJECT'
	},
	{
		course_no: 'HSS F340',
		course_title: 'POST COLONIAL LITERATURES'
	},
	{
		course_no: 'HSS F363',
		course_title: 'DISASTER AND DEVELOPMENT'
	},
	{
		course_no: 'HSS G511',
		course_title: 'PHILOSOPHICAL FOND OF LIB STDS'
	},
	{
		course_no: 'HSS F347',
		course_title: 'INTRODUCTION TO CARNATIC MUSIC'
	},
	{
		course_no: 'MATH F266',
		course_title: 'STUDY PROJECT'
	},
	{
		course_no: 'HSS F349',
		course_title: 'ECOCRITICISM'
	},
	{
		course_no: 'GS F221',
		course_title: 'BUSINESS COMMUNICATION'
	},
	{
		course_no: 'GS F234',
		course_title: 'DEVELOPMENT ECONOMICS'
	},
	{
		course_no: 'MATH F313',
		course_title: 'NUMERICAL ANALYSIS'
	},
	{
		course_no: 'INSTR F311',
		course_title: 'ELECTRO INST &INST TECH'
	},
	{
		course_no: 'INSTR F312',
		course_title: 'TRANSD & MEASUREMENT SYS'
	},
	{
		course_no: 'EEE F431',
		course_title: 'MOBILE\nTELECOMMUNICATION NETWORKS'
	},
	{
		course_no: 'FIN F414',
		course_title: 'FINANCIAL RISK ANALYTICS AND\nMANAGEMENT'
	},
	{
		course_no: 'HSS F343',
		course_title: 'PROFESSIONAL ETHICS'
	},
	{
		course_no: 'INSTR F212',
		course_title: 'ELECTROMAGNETIC THEO'
	},
	{
		course_no: 'GS F241',
		course_title: 'CREATIVE WRITING'
	},
	{
		course_no: 'EEE G512',
		course_title: 'EMBEDDED SYSTEM DESIGN'
	},
	{
		course_no: 'INSTR F432',
		course_title: 'MEDICAL INSTRUMENTATION'
	},
	{
		course_no: 'MATH F213',
		course_title: 'DISCREET MATHEMATICS'
	},
	{
		course_no: 'MATH F214',
		course_title: 'ELEMENTARY REAL ANALYSIS'
	},
	{
		course_no: 'MATH F215',
		course_title: 'ALGEBRA I'
	},
	{
		course_no: 'GS F211',
		course_title: 'MODERN POLITICAL CONCEPTS'
	},
	{
		course_no: 'GS F322',
		course_title: 'CRITICAL ANALYSIS OF LITERATURE AND\nCINEMA'
	},
	{
		course_no: 'INSTR F313',
		course_title: 'ANALOG & DIGIT VLSI DES'
	},
	{
		course_no: 'GS F245',
		course_title: 'EFFECTIVE PUBLIC SPEAKING'
	},
	{
		course_no: 'EEE F211',
		course_title: 'ELECTRICAL MACHINES'
	},
	{
		course_no: 'ECE F211',
		course_title: 'ELECTRICAL MACHINES'
	},
	{
		course_no: 'INSTR F215',
		course_title: 'DIGITAL DESIGN'
	},
	{
		course_no: 'GS F212',
		course_title: 'ENVIRON DEV & CLIMATE CH'
	},
	{
		course_no: 'EEE F435',
		course_title: 'DIGITAL IMAGE PROCESSING'
	},
	{
		course_no: 'FIN F315',
		course_title: 'FINANCIAL MANAGEMENT'
	},
	{
		course_no: 'ME F443',
		course_title: 'QUALI CONTRO ASSUR & REL'
	},
	{
		course_no: 'INSTR F211',
		course_title: 'ELECTRICAL MACHINES'
	},
	{
		course_no: 'ME F211',
		course_title: 'MECHANICS OF SOLIDS'
	},
	{
		course_no: 'HSS F371',
		course_title: 'CITIES-LIFE, ISSUES AND CONFLICTS'
	},
	{
		course_no: 'MATH F211',
		course_title: 'MATHEMATICS III'
	},
	{
		course_no: 'ME F217',
		course_title: 'APPLIED THERMODYNAMICS'
	},
	{
		course_no: 'PHY F366',
		course_title: 'LABORATORY PROJECT'
	},
	{
		course_no: 'PHY F367',
		course_title: 'LABORATORY PROJECT'
	},
	{
		course_no: 'PHY F376',
		course_title: 'DESIGN PROJECT'
	},
	{
		course_no: 'PHY F377',
		course_title: 'DESIGN PROJECT'
	},
	{
		course_no: 'MATH F353',
		course_title: 'STATISTICAL INFERENCE AND APPLICATIONS'
	},
	{
		course_no: 'ME F317',
		course_title: 'ENGINES, MOTORS, AND MOBILITY'
	},
	{
		course_no: 'MATH F366',
		course_title: 'LABORATORY PROJECT'
	},
	{
		course_no: 'MATH F367',
		course_title: 'LABORATORY PROJECT'
	},
	{
		course_no: 'MATH F377',
		course_title: 'DESIGN PROJECT'
	},
	{
		course_no: 'MATH F421',
		course_title: 'COMBINATORIAL MATHEMATICS'
	},
	{
		course_no: 'MATH F491',
		course_title: 'SPECIAL PROJECT'
	},
	{
		course_no: 'ME F242',
		course_title: 'IC ENGINES'
	},
	{
		course_no: 'ME F266',
		course_title: 'STUDY PROJECT'
	},
	{
		course_no: 'ME F366',
		course_title: 'LABORATORY PROJECT'
	},
	{
		course_no: 'ME F367',
		course_title: 'LABORATORY PROJECT'
	},
	{
		course_no: 'ME F376',
		course_title: 'DESIGN PROJECT'
	},
	{
		course_no: 'ME F491',
		course_title: 'SPECIAL PROJECTS'
	},
	{
		course_no: 'ME G511',
		course_title: 'MECHANISMS & ROBOTICS'
	},
	{
		course_no: 'ME G512',
		course_title: 'FINITE ELEMENT METHOD'
	},
	{
		course_no: 'ME G532',
		course_title: 'MACHINE TOOL ENGINEERING'
	},
	{
		course_no: 'ME G535',
		course_title: 'ADVANCED ENGINEERING\nMATHEMATICS'
	},
	{
		course_no: 'MEL G611',
		course_title: 'I C FABRICATION TECH'
	},
	{
		course_no: 'MEL G621',
		course_title: 'VLSI DESIGN'
	},
	{
		course_no: 'MEL G622',
		course_title: 'INTRO TO ARTIF NEURAL NET'
	},
	{
		course_no: 'MEL G625',
		course_title: 'ADVANCED ANALOG AND MIXED SIGNAL\nDESIGN'
	},
	{
		course_no: 'MEL G631',
		course_title: 'PHY & MO OF MICROEL DEV'
	},
	{
		course_no: 'MGTS F211',
		course_title: 'PRINCIPLES OF MANAGEMENT'
	},
	{
		course_no: 'MST G511',
		course_title: 'NONDESTRUCTIVE TESTING TECHNIQUES'
	},
	{
		course_no: 'PHY F415',
		course_title: 'GENERAL THEORY OF RELATIVITY AND COSMOLOGY'
	},
	{
		course_no: 'PHY F416',
		course_title: 'SOFT CONDENSED MATTER PHYSICS'
	},
	{
		course_no: 'PHY F491',
		course_title: 'SPECIAL PROJECT'
	},
	{
		course_no: 'PHY G513',
		course_title: 'CLASSICAL ELECTRODYNAMIC'
	},
	{
		course_no: 'PHY G541',
		course_title: 'PHY OF SEMICONDUCTOR DEV'
	},
	{
		course_no: 'ME F241',
		course_title: 'MACHINE DESIGN & DRAWING'
	},
	{
		course_no: 'PHY F213',
		course_title: 'OPTICS'
	},
	{
		course_no: 'PHY F346',
		course_title: 'LASER SCIENCE AND TECHNOLOGY'
	},
	{
		course_no: 'PHY F214',
		course_title: 'ELEC, MAGNET & OPTICS LAB'
	},
	{
		course_no: 'HSS F235',
		course_title: 'INTRODUCTORY PHILOSOPHY'
	},
	{
		course_no: 'MATH F432',
		course_title: 'APPLIED STATISTICAL METHODS'
	},
	{
		course_no: 'MATH F424',
		course_title: 'APPLIED STOCHASTIC PROCESS'
	},
	{
		course_no: 'PHY F426',
		course_title: 'PHYSICS OF SEMICONDUCTOR DEVICES'
	},
	{
		course_no: 'ME F423',
		course_title: 'MICRO-FLUIDICS & ITS APP'
	},
	{
		course_no: 'PHY F428',
		course_title: 'QUANTUM INFORMATION THEORY'
	},
	{
		course_no: 'PHY F211',
		course_title: 'CLASSICAL MECHANICS'
	},
	{
		course_no: 'PHY F315',
		course_title: 'THEORY OF RELATIVITY'
	},
	{
		course_no: 'PHY F313',
		course_title: 'COMPUTATIONAL PHYSICS'
	},
	{
		course_no: 'HSS F373',
		course_title: 'SHAKESPEARE AND POPULAR CULTURE'
	},
	{
		course_no: 'HSS F236',
		course_title: 'SYMBOLIC LOGIC'
	},
	{
		course_no: 'PHY F215',
		course_title: 'INTRODUCTION TO ASTRONOMY & ASTROPHYSICS'
	},
	{
		course_no: 'SAN G511',
		course_title: 'SANITATION TECHNOLOGY'
	},
	{
		course_no: 'EEE F214',
		course_title: 'ELECTRONIC DEVICES'
	},
	{
		course_no: 'CS F213',
		course_title: 'OBJECT ORIENTED PROG'
	},
	{
		course_no: 'ME F315',
		course_title: 'ADVANCED\nMANUFACTURING PROCESS'
	},
	{
		course_no: 'MATH F471',
		course_title: 'NONLINEAR OPTIMIZATION'
	},
	{
		course_no: 'ME F316',
		course_title: 'MANUFACTURING MANAGEMENT'
	},
	{
		course_no: 'ECON F313',
		course_title: 'ISSUES IN ECONOMIC DEVELOPMENT'
	},
	{
		course_no: 'ME F216',
		course_title: 'MATERIAL SCI AND ENGINEERIN'
	},
	{
		course_no: 'MATH F354',
		course_title: 'COMPLEX ANALYSIS'
	},
	{
		course_no: 'MATH F376',
		course_title: 'DESIGN PROJECT'
	},
	{
		course_no: 'SAN G513',
		course_title: 'SAN GVRNNCE BHAVR CHG&ADVCY'
	},
	{
		course_no: 'BIO F266',
		course_title: 'STUDY PROJECT'
	},
	{
		course_no: 'BITS F312',
		course_title: 'NEURAL NETWORKS AND FUZZY LOGIC'
	},
	{
		course_no: 'FIN F313',
		course_title: 'SECURITY ANALYSIS AND PORTFOLIO MANAGEMENT'
	},
	{
		course_no: 'CS F320',
		course_title: 'FOUNDATIONS OF DATA SCIENCE'
	},
	{
		course_no: 'PHY F212',
		course_title: 'ELECTROMAGNETIC THEO'
	},
	{
		course_no: 'CHE F313',
		course_title: 'SEPARATION PROCESSES II'
	},
	{
		course_no: 'PHY F312',
		course_title: 'STATISTICAL MECHANICS'
	},
	{
		course_no: 'PHY F311',
		course_title: 'QUANTUM MECHANICS II'
	},
	{
		course_no: 'ECON F311',
		course_title: 'INTERNATIONAL ECONOMICS'
	},
	{
		course_no: 'CS F214',
		course_title: 'LOGIC IN COMPUTER SC'
	},
	{
		course_no: 'ME F212',
		course_title: 'FLUID MECHANICS'
	},
	{
		course_no: 'GS F231',
		course_title: 'DYNAMICS OF SOCIAL CHANGE'
	},
	{
		course_no: 'BIO G542',
		course_title: 'ADVANCED CELL MOLE BIO'
	},
	{
		course_no: 'HSS F372',
		course_title: 'INTRODUCTION TO SOCIAL PSYCHOLOGY'
	},
	{
		course_no: 'BITS E574',
		course_title: 'STUDY IN ADVANCED TOPICS II'
	},
	{
		course_no: 'BIO F418',
		course_title: 'GENETIC ENGINEERING TECHNIQUES'
	},
	{
		course_no: 'BITS F314',
		course_title: "GAME THEORY AND IT'S APPLICATIONS"
	},
	{
		course_no: 'CHE F377',
		course_title: 'DESIGN PROJECT'
	},
	{
		course_no: 'CHE G622',
		course_title: 'ADVANCED CHEMICAL ENGINEERING\nTHERMODYNAMICS'
	},
	{
		course_no: 'BITS G539',
		course_title: 'RESEARCH PROJECT II'
	},
	{
		course_no: 'CHEM F212',
		course_title: 'ORGANIC CHEMISTRY I'
	},
	{
		course_no: 'CHEM F333',
		course_title: 'CHEMISTRY OF MATERIALS'
	},
	{
		course_no: 'CS G525',
		course_title: 'ADVANCED COMPUTER NETWORKS'
	},
	{
		course_no: 'ECE F472',
		course_title: 'SATELLITE COMMUNICATION'
	},
	{
		course_no: 'ECON F211',
		course_title: 'PRINCIPLES OF ECONOMICS'
	},
	{
		course_no: 'CS F407',
		course_title: 'ARTIFICIAL INTELLIGENCE'
	},
	{
		course_no: 'HSS F314',
		course_title: 'MARITIME STUDIES & BL'
	},
	{
		course_no: 'CS F402',
		course_title: 'COMPUTATIONAL GEOMETRY'
	},
	{
		course_no: 'ME F314',
		course_title: 'DESIGN OF MACHINE ELEMENTS'
	},
	{
		course_no: 'EEE F472',
		course_title: 'SATELLITE COMMUNICATION'
	},
	{
		course_no: 'PHY F412',
		course_title: 'INTRODUCTION TO QUANTUM FIELD THEORY'
	},
	{
		course_no: 'ME F377',
		course_title: 'DESIGN PROJECT'
	},
	{
		course_no: 'MEL G623',
		course_title: 'ADVANCED VLSI DESIGN'
	},
	{
		course_no: 'PHY F266',
		course_title: 'STUDY PROJECT'
	},
	{
		course_no: 'ME F485',
		course_title: 'NUMERICAL TECHNIQUES FOR FLUID FLOW AND HEAT\nTRANSFER'
	},
	{
		course_no: 'SAN G512',
		course_title: 'SANITATION AND PUBLIC HEALTH'
	},
	{
		course_no: 'ECON F355',
		course_title: 'BUSINESS ANALYSIS AND VALUATION'
	}
];

let selectedList = [];

window.onload = () => {
	const container = document.getElementById('container');
	const addBtn = document.getElementById('addBtn');
	const submitBtn = document.getElementById('submitBtn');
	const dataList = document.getElementById('courses');

	const addInput = (val, id) => {
		const inputElement = document.createElement('input');

		inputElement.setAttribute('list', 'courses');
		inputElement.id = id;
		inputElement.value = val;
		inputElement.style.display = 'block';
		inputElement.className =
			'py-2 px-4 rounded-lg text-white font-bold text-base focus:outline-none bg-input-bg shadow-2xl';
		inputElement.style.width = '500px';

		inputElement.onchange = (e) => {
			selectedList[inputElement.id] = e.target.value.trim();
		};

		inputElement.onfocus = () => {
			inputElement.select();
		};

		container.appendChild(inputElement);
	};

	const submitHandler = () => {
		selectedList = selectedList.filter((course) => course.length > 0);

		const modifiedList = [];
		selectedList.forEach((item) => {
			modifiedList.push({
				name: item,
				status: false,
				sections: []
			});
		});

		chrome.storage.sync.set({ selectedCourses: modifiedList }, () => {
			window.close();
		});
	};

	courses.forEach((course) => {
		const option = document.createElement('option');
		option.text = course.course_no + ' : ' + course.course_title;
		dataList.appendChild(option);
	});

	chrome.storage.sync.get('selectedCourses', (e) => {
		selectedList = e.selectedCourses || [];

		if (selectedList.length == 0) {
			selectedList = ['', '', '', ''];
		} else {
			selectedList.forEach((item, index) => {
				selectedList[index] = item.name;
			});
		}

		selectedList.forEach((course, index) => {
			addInput(course, index);
		});
	});

	addBtn.addEventListener('click', () => addInput('', selectedList.length));
	submitBtn.addEventListener('click', submitHandler);
};

// const courses = [
// 	{
// 		course_no: 'BITS F412',
// 		course_title: 'PRACTICE SCHOOL II',
// 		course_id: 4000
// 	},
// 	{
// 		course_no: 'EEE F418',
// 		course_title: 'MODERN COMMUNICATION TECHNOLOGIES',
// 		course_id: 4242
// 	},
// 	{
// 		course_no: 'EEE F431',
// 		course_title: 'MOBILE\nTELECOMMUNICATION NETWORKS',
// 		course_id: 4243
// 	},
// 	{
// 		course_no: 'EEE F434',
// 		course_title: 'DIGITAL SIGNAL\nPROCESSING',
// 		course_id: 4244
// 	},
// 	{
// 		course_no: 'EEE F435',
// 		course_title: 'DIGITAL IMAGE\nPROCESSING',
// 		course_id: 4245
// 	},
// 	{
// 		course_no: 'EEE F477',
// 		course_title: 'MODELING OF FIELD-\nEFFECT NANODEVICES',
// 		course_id: 4246
// 	},
// 	{
// 		course_no: 'EEE F491',
// 		course_title: 'SPECIAL PROJECT',
// 		course_id: 4247
// 	},
// 	{
// 		course_no: 'FIN F311',
// 		course_title: 'DERIVATIVES & RISK\nMANAGEMENT',
// 		course_id: 4248
// 	},
// 	{
// 		course_no: 'FIN F313',
// 		course_title: 'SECURITY ANALYSIS AND PORTFOLIO MANAGEMENT',
// 		course_id: 4249
// 	},
// 	{
// 		course_no: 'FIN F315',
// 		course_title: 'FINANCIAL MANAGEMENT',
// 		course_id: 4250
// 	},
// 	{
// 		course_no: 'FIN F414',
// 		course_title: 'FINANCIAL RISK ANALYTICS AND MANAGEMENT',
// 		course_id: 4251
// 	},
// 	{
// 		course_no: 'GS F211',
// 		course_title: 'MODERN POLITICAL CONCEPTS',
// 		course_id: 4252
// 	},
// 	{
// 		course_no: 'GS F212',
// 		course_title: 'ENVIRON DEV & CLIMATE\nCH',
// 		course_id: 4253
// 	},
// 	{
// 		course_no: 'GS F221',
// 		course_title: 'BUSINESS COMMUNICATION',
// 		course_id: 4254
// 	},
// 	{
// 		course_no: 'GS F231',
// 		course_title: 'DYNAMICS OF SOCIAL CHANGE',
// 		course_id: 4255
// 	},
// 	{
// 		course_no: 'GS F234',
// 		course_title: 'DEVELOPMENT ECONOMICS',
// 		course_id: 4256
// 	},
// 	{
// 		course_no: 'GS F322',
// 		course_title: 'CRITICAL ANALYSIS OF LITERATURE AND CINEMA',
// 		course_id: 4257
// 	},
// 	{
// 		course_no: 'HSS F221',
// 		course_title: 'READINGS FROM DRAMA',
// 		course_id: 4258
// 	},
// 	{
// 		course_no: 'HSS F227',
// 		course_title: 'CROSS CULTURAL SKILLS',
// 		course_id: 4259
// 	},
// 	{
// 		course_no: 'HSS F233',
// 		course_title: 'MAIN TRENDS IN INDIAN\nHISTORY',
// 		course_id: 4260
// 	},
// 	{
// 		course_no: 'HSS F235',
// 		course_title: 'INTRODUCTORY PHILOSOPHY',
// 		course_id: 4261
// 	},
// 	{
// 		course_no: 'HSS F236',
// 		course_title: 'SYMBOLIC LOGIC',
// 		course_id: 4262
// 	},
// 	{
// 		course_no: 'HSS F266',
// 		course_title: 'STUDY PROJECT',
// 		course_id: 4263
// 	},
// 	{
// 		course_no: 'HSS F317',
// 		course_title: 'INTRODUCTION TO\nGLOBALIZATION',
// 		course_id: 4264
// 	},
// 	{
// 		course_no: 'HSS F346',
// 		course_title: 'INTERNATIONAL RELATIONS',
// 		course_id: 4265
// 	},
// 	{
// 		course_no: 'HSS F347',
// 		course_title: 'INTRO TO CARNATIC MUSIC',
// 		course_id: 4266
// 	},
// 	{
// 		course_no: 'HSS F349',
// 		course_title: 'ECOCRITICISM',
// 		course_id: 4267
// 	},
// 	{
// 		course_no: 'HSS F369',
// 		course_title: 'CASTE AND GENDER IN\nINDIA',
// 		course_id: 4268
// 	},
// 	{
// 		course_no: 'HSS F372',
// 		course_title: 'INTRODUCTION TO SOCIAL\nPSYCHOLOGY',
// 		course_id: 4269
// 	},
// 	{
// 		course_no: 'HSS F373',
// 		course_title: 'SHAKESPEARE AND\nPOPULAR CULTURE',
// 		course_id: 4270
// 	},
// 	{
// 		course_no: 'INSTR F241',
// 		course_title: 'MICROPROCESSORS &\nINTERFACING',
// 		course_id: 4271
// 	},
// 	{
// 		course_no: 'INSTR F242',
// 		course_title: 'CONTROL SYSTEMS',
// 		course_id: 4272
// 	},
// 	{
// 		course_no: 'INSTR F243',
// 		course_title: 'SIGNALS & SYSTEMS',
// 		course_id: 4273
// 	},
// 	{
// 		course_no: 'INSTR F244',
// 		course_title: 'MICROELECTRONIC\nCIRCUITS',
// 		course_id: 4274
// 	},
// 	{
// 		course_no: 'INSTR F266',
// 		course_title: 'STUDY PROJECT',
// 		course_id: 4275
// 	},
// 	{
// 		course_no: 'INSTR F341',
// 		course_title: 'ANALOG ELECTRONICS',
// 		course_id: 4276
// 	},
// 	{
// 		course_no: 'INSTR F342',
// 		course_title: 'POWER ELECTRONICS',
// 		course_id: 4277
// 	},
// 	{
// 		course_no: 'INSTR F343',
// 		course_title: 'INDUS INSTRUMENT & CONT',
// 		course_id: 4278
// 	},
// 	{
// 		course_no: 'INSTR F366',
// 		course_title: 'LABORATORY PROJECT',
// 		course_id: 4279
// 	},
// 	{
// 		course_no: 'INSTR F367',
// 		course_title: 'LABORATORY PROJECT',
// 		course_id: 4280
// 	},
// 	{
// 		course_no: 'INSTR F376',
// 		course_title: 'DESIGN PROJECT',
// 		course_id: 4281
// 	},
// 	{
// 		course_no: 'INSTR F377',
// 		course_title: 'DESIGN PROJECT',
// 		course_id: 4282
// 	},
// 	{
// 		course_no: 'INSTR F491',
// 		course_title: 'SPECIAL PROJECT',
// 		course_id: 4283
// 	},
// 	{
// 		course_no: 'MATH F211',
// 		course_title: 'MATHEMATICS III',
// 		course_id: 4284
// 	},
// 	{
// 		course_no: 'MATH F212',
// 		course_title: 'OPTIMISATION',
// 		course_id: 4285
// 	},
// 	{
// 		course_no: 'MATH F213',
// 		course_title: 'DISCREET MATHEMATICS',
// 		course_id: 4286
// 	},
// 	{
// 		course_no: 'MATH F231',
// 		course_title: 'NUMBER THEORY',
// 		course_id: 4287
// 	},
// 	{
// 		course_no: 'MATH F241',
// 		course_title: 'MATHEMATICAL METHODS',
// 		course_id: 4288
// 	},
// 	{
// 		course_no: 'MATH F242',
// 		course_title: 'OPERATIONS RESEARCH',
// 		course_id: 4289
// 	},
// 	{
// 		course_no: 'MATH F243',
// 		course_title: 'GRAPHS AND NETWORKS',
// 		course_id: 4290
// 	},
// 	{
// 		course_no: 'MATH F244',
// 		course_title: 'MEASURE & INTEGRATION',
// 		course_id: 4291
// 	},
// 	{
// 		course_no: 'MATH F266',
// 		course_title: 'STUDY PROJECT',
// 		course_id: 4292
// 	},
// 	{
// 		course_no: 'MATH F313',
// 		course_title: 'NUMERICAL ANALYSIS',
// 		course_id: 4293
// 	},
// 	{
// 		course_no: 'MATH F341',
// 		course_title: 'INTRO TO FUNCTIONAL ANAL',
// 		course_id: 4294
// 	},
// 	{
// 		course_no: 'MATH F342',
// 		course_title: 'DIFFERENTIAL GEOMETRY',
// 		course_id: 4295
// 	},
// 	{
// 		course_no: 'MATH F343',
// 		course_title: 'PARTIAL DIFF EQUATIONS',
// 		course_id: 4296
// 	},
// 	{
// 		course_no: 'MATH F353',
// 		course_title: 'STATISTICAL INFERENCE AND APPLICATIONS',
// 		course_id: 4297
// 	},
// 	{
// 		course_no: 'MATH F366',
// 		course_title: 'LABORATORY PROJECT',
// 		course_id: 4298
// 	},
// 	{
// 		course_no: 'MATH F367',
// 		course_title: 'LABORATORY PROJECT',
// 		course_id: 4299
// 	},
// 	{
// 		course_no: 'MATH F376',
// 		course_title: 'DESIGN PROJECT',
// 		course_id: 4300
// 	},
// 	{
// 		course_no: 'MATH F377',
// 		course_title: 'DESIGN PROJECT',
// 		course_id: 4301
// 	},
// 	{
// 		course_no: 'MATH F420',
// 		course_title: 'MATHEMATICAL MODELING',
// 		course_id: 4302
// 	},
// 	{
// 		course_no: 'BIO F215',
// 		course_title: 'BIOPHYSICS',
// 		course_id: 4072
// 	},
// 	{
// 		course_no: 'BIO F216',
// 		course_title: 'WATER, SANITATION AND SOLID WASTE\nMANAGEMENT',
// 		course_id: 4073
// 	},
// 	{
// 		course_no: 'BIO F217',
// 		course_title: 'LABORATORY FOR WATER, SANITATION AND SOLID WASTE MANAGEMENT',
// 		course_id: 4074
// 	},
// 	{
// 		course_no: 'BIO F241',
// 		course_title: 'ECOLOGY & ENVIRON SCI',
// 		course_id: 4075
// 	},
// 	{
// 		course_no: 'BIO F242',
// 		course_title: 'INTRO TO BIOINFORMATICS',
// 		course_id: 4076
// 	},
// 	{
// 		course_no: 'BIO F243',
// 		course_title: 'GENETICS',
// 		course_id: 4077
// 	},
// 	{
// 		course_no: 'BIO F244',
// 		course_title: 'INSTRU METHODS OF ANAL',
// 		course_id: 4078
// 	},
// 	{
// 		course_no: 'BIO F266',
// 		course_title: 'STUDY PROJECT',
// 		course_id: 4079
// 	},
// 	{
// 		course_no: 'BIO F366',
// 		course_title: 'LABORATORY PROJECT',
// 		course_id: 4080
// 	},
// 	{
// 		course_no: 'BIO F367',
// 		course_title: 'LABORATORY PROJECT',
// 		course_id: 4081
// 	},
// 	{
// 		course_no: 'BIO F376',
// 		course_title: 'DESIGN PROJECT',
// 		course_id: 4082
// 	},
// 	{
// 		course_no: 'BIO F377',
// 		course_title: 'DESIGN PROJECT',
// 		course_id: 4083
// 	},
// 	{
// 		course_no: 'BIO F491',
// 		course_title: 'SPECIAL PROJECT',
// 		course_id: 4084
// 	},
// 	{
// 		course_no: 'BIO F341',
// 		course_title: 'DEVELOPMENTAL BIOLOGY',
// 		course_id: 4085
// 	},
// 	{
// 		course_no: 'BIO F342',
// 		course_title: 'IMMUNOLOGY',
// 		course_id: 4086
// 	},
// 	{
// 		course_no: 'BIO F413',
// 		course_title: 'MOLECULAR BIOLOGY OF CELL',
// 		course_id: 4087
// 	},
// 	{
// 		course_no: 'BIO F419',
// 		course_title: 'MOLECULAR EVOLUTION',
// 		course_id: 4088
// 	},
// 	{
// 		course_no: 'BIO F421',
// 		course_title: 'ENZYMOLOGY',
// 		course_id: 4089
// 	},
// 	{
// 		course_no: 'BIO F431',
// 		course_title: 'REPRODUCTIVE PHYSIOLOGY',
// 		course_id: 4090
// 	},
// 	{
// 		course_no: 'BIO G524',
// 		course_title: 'ANIMAL CELL TECHNOLOGY',
// 		course_id: 4091
// 	},
// 	{
// 		course_no: 'BIO G532',
// 		course_title: 'BIOSTATISTICS AND\nBIOMODELLING',
// 		course_id: 4092
// 	},
// 	{
// 		course_no: 'BIO G632',
// 		course_title: 'TRANSGENIC TECHNOLOGY',
// 		course_id: 4093
// 	},
// 	{
// 		course_no: 'BIO G642',
// 		course_title: 'EXPERIMENTAL TECHNIQUES',
// 		course_id: 4094
// 	},
// 	{
// 		course_no: 'BIO G643',
// 		course_title: 'PLANT BIOTECHNOLOGY',
// 		course_id: 4095
// 	},
// 	{
// 		course_no: 'BIO G651',
// 		course_title: 'PROTEIN AND ENZYME\nBIOENGINEERING',
// 		course_id: 4096
// 	},
// 	{
// 		course_no: 'BIOT F345',
// 		course_title: 'PROTEOMICS',
// 		course_id: 4097
// 	},
// 	{
// 		course_no: 'BIOT F346',
// 		course_title: 'GENOMICS',
// 		course_id: 4098
// 	},
// 	{
// 		course_no: 'BIOT F422',
// 		course_title: 'NANOBIOTECHNOLOGY',
// 		course_id: 4099
// 	},
// 	{
// 		course_no: 'BIOT F424',
// 		course_title: 'FOOD BIOTECHNOLOGY',
// 		course_id: 4100
// 	},
// 	{
// 		course_no: 'BITS C790T',
// 		course_title: 'INDEPENDENT STUDY',
// 		course_id: 4101
// 	},
// 	{
// 		course_no: 'BITS C791T',
// 		course_title: 'TEACHING PRACTICE I',
// 		course_id: 4102
// 	},
// 	{
// 		course_no: 'BITS C797T',
// 		course_title: 'PH D SEMINAR',
// 		course_id: 4103
// 	},
// 	{
// 		course_no: 'BITS C799T',
// 		course_title: 'PH D THESIS',
// 		course_id: 4104
// 	},
// 	{
// 		course_no: 'BITS E573',
// 		course_title: 'STUDY IN ADVANCED\nTOPICS I',
// 		course_id: 4105
// 	},
// 	{
// 		course_no: 'BITS E574',
// 		course_title: 'STUDY IN ADVANCED\nTOPICS II',
// 		course_id: 4106
// 	},
// 	{
// 		course_no: 'BITS E583',
// 		course_title: 'CASE STUDIES I',
// 		course_id: 4107
// 	},
// 	{
// 		course_no: 'BITS E661',
// 		course_title: 'RESEARCH METHODOLOGY\nI',
// 		course_id: 4108
// 	},
// 	{
// 		course_no: 'BITS E793T',
// 		course_title: 'PRACTICE LECT SERIES I',
// 		course_id: 4109
// 	},
// 	{
// 		course_no: 'BITS F311',
// 		course_title: 'IMAGE PROCESSING',
// 		course_id: 4110
// 	},
// 	{
// 		course_no: 'BITS F312',
// 		course_title: 'NEURAL NETWORKS AND FUZZY LOGIC',
// 		course_id: 4111
// 	},
// 	{
// 		course_no: 'BITS F316',
// 		course_title: 'NONLINEAR DYNAMICS AND CHAOS',
// 		course_id: 4112
// 	},
// 	{
// 		course_no: 'BITS F382',
// 		course_title: 'READING COURSE',
// 		course_id: 4113
// 	},
// 	{
// 		course_no: 'BITS F386',
// 		course_title: 'QUANTUM INFORMATION AND COMPUTATION',
// 		course_id: 4114
// 	},
// 	{
// 		course_no: 'BITS F415',
// 		course_title: 'INTRODUCTION TO MEMS',
// 		course_id: 4115
// 	},
// 	{
// 		course_no: 'BITS F416',
// 		course_title: 'INTRO TO NANO SCIENCE',
// 		course_id: 4116
// 	},
// 	{
// 		course_no: 'BITS F463',
// 		course_title: 'CRYPTOGRAPHY',
// 		course_id: 4117
// 	},
// 	{
// 		course_no: 'BITS F464',
// 		course_title: 'MACHINE LEARNING',
// 		course_id: 4118
// 	},
// 	{
// 		course_no: 'BITS G511',
// 		course_title: 'ADVANCED PROJECT',
// 		course_id: 4119
// 	},
// 	{
// 		course_no: 'BITS G513',
// 		course_title: 'STUDY IN ADVANCED\nTOPICS',
// 		course_id: 4120
// 	},
// 	{
// 		course_no: 'BITS G529',
// 		course_title: 'RESEARCH PROJECT I',
// 		course_id: 4121
// 	},
// 	{
// 		course_no: 'BITS G539',
// 		course_title: 'RESEARCH PROJECT II',
// 		course_id: 4122
// 	},
// 	{
// 		course_no: 'BITS G540',
// 		course_title: 'RESEARCH PRACTICE',
// 		course_id: 4123
// 	},
// 	{
// 		course_no: 'BITS G562T',
// 		course_title: 'DISSERTATION',
// 		course_id: 4124
// 	},
// 	{
// 		course_no: 'BITS G563T',
// 		course_title: 'DISSERTATION',
// 		course_id: 4125
// 	},
// 	{
// 		course_no: 'BITS G619',
// 		course_title: 'PROFESSIONAL PRACTICE',
// 		course_id: 4126
// 	},
// 	{
// 		course_no: 'BITS G629T',
// 		course_title: 'DISSERTATION',
// 		course_id: 4127
// 	},
// 	{
// 		course_no: 'BITS G649',
// 		course_title: 'READING COURSE',
// 		course_id: 4128
// 	},
// 	{
// 		course_no: 'BITS G654',
// 		course_title: 'ADV INSTRUMENTATION TECH',
// 		course_id: 4129
// 	},
// 	{
// 		course_no: 'BITS G661',
// 		course_title: 'RESEARCH METHODOLOGY\nI',
// 		course_id: 4130
// 	},
// 	{
// 		course_no: 'CHE F241',
// 		course_title: 'HEAT TRANSFER',
// 		course_id: 4131
// 	},
// 	{
// 		course_no: 'CHE F242',
// 		course_title: 'NUMERICAL METHODS FOR CHEMICAL ENGINEERS',
// 		course_id: 4132
// 	},
// 	{
// 		course_no: 'CHE F243',
// 		course_title: 'MATERIAL SCIENCE &\nENGINEERING',
// 		course_id: 4133
// 	},
// 	{
// 		course_no: 'CHE F244',
// 		course_title: 'SEPARATION PROCESSES I',
// 		course_id: 4134
// 	},
// 	{
// 		course_no: 'CHE F266',
// 		course_title: 'STUDY PROJECT',
// 		course_id: 4135
// 	},
// 	{
// 		course_no: 'CHE F341',
// 		course_title: 'CHEMICAL ENGG LAB II',
// 		course_id: 4136
// 	},
// 	{
// 		course_no: 'CHE F342',
// 		course_title: 'PROCESS DYN & CONTROL',
// 		course_id: 4137
// 	},
// 	{
// 		course_no: 'CHE F343',
// 		course_title: 'PROCESS DES PRINCIPLE II',
// 		course_id: 4138
// 	},
// 	{
// 		course_no: 'CHE F366',
// 		course_title: 'LABORATORY PROJECT',
// 		course_id: 4139
// 	},
// 	{
// 		course_no: 'CHE F367',
// 		course_title: 'LABORATORY PROJECT',
// 		course_id: 4140
// 	},
// 	{
// 		course_no: 'CHE F376',
// 		course_title: 'DESIGN PROJECT',
// 		course_id: 4141
// 	},
// 	{
// 		course_no: 'CHE F377',
// 		course_title: 'DESIGN PROJECT',
// 		course_id: 4142
// 	},
// 	{
// 		course_no: 'CHE F412',
// 		course_title: 'PROCESS EQUIPMENT DESIGN',
// 		course_id: 4143
// 	},
// 	{
// 		course_no: 'CHE F413',
// 		course_title: 'PROCESS PLANT SAFETY',
// 		course_id: 4144
// 	},
// 	{
// 		course_no: 'CHE F414',
// 		course_title: 'TRANSPORT PHENOMENA',
// 		course_id: 4145
// 	},
// 	{
// 		course_no: 'CHE F416',
// 		course_title: 'PROCESS PLANT DESIGN PROJECT I',
// 		course_id: 4146
// 	},
// 	{
// 		course_no: 'CHE F417',
// 		course_title: 'PROCESS PLANT DESIGN PROJECT II',
// 		course_id: 4147
// 	},
// 	{
// 		course_no: 'CHE F419',
// 		course_title: 'CHEMICAL PROCESS TECHNOLOGY',
// 		course_id: 4148
// 	},
// 	{
// 		course_no: 'CHE F491',
// 		course_title: 'SPECIAL PROJECTS',
// 		course_id: 4149
// 	},
// 	{
// 		course_no: 'CHE G513',
// 		course_title: 'ENVIRONMENTAL MANAGEMENT SYSTEM',
// 		course_id: 4150
// 	},
// 	{
// 		course_no: 'CHE G522',
// 		course_title: 'POLYMER TECHNOLOGY',
// 		course_id: 4151
// 	},
// 	{
// 		course_no: 'CHE G552',
// 		course_title: 'ADVANCED TRANSPORT PHENOMENA',
// 		course_id: 4152
// 	},
// 	{
// 		course_no: 'CHE G558',
// 		course_title: 'CHEMICAL PROCESS\nOPTIMIZATION',
// 		course_id: 4153
// 	},
// 	{
// 		course_no: 'CHE G641',
// 		course_title: 'REACTION ENGINEERING',
// 		course_id: 4154
// 	},
// 	{
// 		course_no: 'CHEM F241',
// 		course_title: 'INORGANIC CHEMISTRY II',
// 		course_id: 4155
// 	},
// 	{
// 		course_no: 'CHEM F242',
// 		course_title: 'CHEMICAL EXPER I',
// 		course_id: 4156
// 	},
// 	{
// 		course_no: 'CHEM F243',
// 		course_title: 'ORGANIC CHEMISTRY II',
// 		course_id: 4157
// 	},
// 	{
// 		course_no: 'CHEM F244',
// 		course_title: 'PHYSICAL CHEMISTRY III',
// 		course_id: 4158
// 	},
// 	{
// 		course_no: 'CHEM F266',
// 		course_title: 'STUDY PROJECT',
// 		course_id: 4159
// 	},
// 	{
// 		course_no: 'CHEM F325',
// 		course_title: 'POLYMER CHEMISTRY',
// 		course_id: 4160
// 	},
// 	{
// 		course_no: 'CHEM F327',
// 		course_title: 'ELECTROCHEMISTRY: FUNDAMENTALS AND\nAPPLICATIONS',
// 		course_id: 4161
// 	},
// 	{
// 		course_no: 'CHEM F328',
// 		course_title: 'SUPRAMOLECULAR CHEMISTRY',
// 		course_id: 4162
// 	},
// 	{
// 		course_no: 'CHEM F341',
// 		course_title: 'CHEMICAL EXPERIMENTATION II',
// 		course_id: 4163
// 	},
// 	{
// 		course_no: 'CHEM F342',
// 		course_title: 'ORGANIC CHEMISTRY IV',
// 		course_id: 4164
// 	},
// 	{
// 		course_no: 'CHEM F343',
// 		course_title: 'INORGANIC CHEMISTRY III',
// 		course_id: 4165
// 	},
// 	{
// 		course_no: 'CHEM F366',
// 		course_title: 'LABORATORY PROJECT',
// 		course_id: 4166
// 	},
// 	{
// 		course_no: 'CHEM F367',
// 		course_title: 'LABORATORY PROJECT',
// 		course_id: 4167
// 	},
// 	{
// 		course_no: 'CHEM F376',
// 		course_title: 'DESIGN PROJECT',
// 		course_id: 4168
// 	},
// 	{
// 		course_no: 'CHEM F377',
// 		course_title: 'DESIGN PROJECT',
// 		course_id: 4169
// 	},
// 	{
// 		course_no: 'CHEM F491',
// 		course_title: 'SPECIAL PROJECT',
// 		course_id: 4170
// 	},
// 	{
// 		course_no: 'CS F211',
// 		course_title: 'DATA STRUCTURES & ALGORITHMS',
// 		course_id: 4171
// 	},
// 	{
// 		course_no: 'CS F212',
// 		course_title: 'DATABASE SYSTEMS',
// 		course_id: 4172
// 	},
// 	{
// 		course_no: 'CS F213',
// 		course_title: 'OBJECT ORIENTED PROG',
// 		course_id: 4173
// 	},
// 	{
// 		course_no: 'CS F241',
// 		course_title: 'MICROPROCESSORS &\nINTERFACING',
// 		course_id: 4174
// 	},
// 	{
// 		course_no: 'CS F266',
// 		course_title: 'STUDY PROJECT',
// 		course_id: 4175
// 	},
// 	{
// 		course_no: 'CS F303',
// 		course_title: 'COMPUTER NETWORKS',
// 		course_id: 4176
// 	},
// 	{
// 		course_no: 'CS F320',
// 		course_title: 'FOUNDATIONS OF DATA SCIENCE',
// 		course_id: 4177
// 	},
// 	{
// 		course_no: 'CS F342',
// 		course_title: 'COMPUTER ARCHITECTURE',
// 		course_id: 4178
// 	},
// 	{
// 		course_no: 'CS F363',
// 		course_title: 'COMPILER CONSTRUCTION',
// 		course_id: 4179
// 	},
// 	{
// 		course_no: 'CS F364',
// 		course_title: 'DESIGN & ANAL OF ALGO',
// 		course_id: 4180
// 	},
// 	{
// 		course_no: 'CS F366',
// 		course_title: 'LABORATORY PROJECT',
// 		course_id: 4181
// 	},
// 	{
// 		course_no: 'CS F367',
// 		course_title: 'LABORATORY PROJECT',
// 		course_id: 4182
// 	},
// 	{
// 		course_no: 'CS F376',
// 		course_title: 'DESIGN PROJECT',
// 		course_id: 4183
// 	},
// 	{
// 		course_no: 'CS F377',
// 		course_title: 'DESIGN PROJECT',
// 		course_id: 4184
// 	},
// 	{
// 		course_no: 'CS F491',
// 		course_title: 'SPECIAL PROJECT',
// 		course_id: 4185
// 	},
// 	{
// 		course_no: 'CS F407',
// 		course_title: 'ARTIFICIAL INTELLIGENCE',
// 		course_id: 4186
// 	},
// 	{
// 		course_no: 'CS F422',
// 		course_title: 'PARALLEL COMPUTING',
// 		course_id: 4187
// 	},
// 	{
// 		course_no: 'CS F446',
// 		course_title: 'DATA STORAGE TECHNOLOGIES AND NETWORKS',
// 		course_id: 4188
// 	},
// 	{
// 		course_no: 'CS G513',
// 		course_title: 'NETWORK SECURITY',
// 		course_id: 4189
// 	},
// 	{
// 		course_no: 'CS G527',
// 		course_title: 'CLOUD COMPUTING',
// 		course_id: 4190
// 	},
// 	{
// 		course_no: 'CS G551',
// 		course_title: 'ADVANCE COMPILATION TECHNIQUES',
// 		course_id: 4191
// 	},
// 	{
// 		course_no: 'DE G514',
// 		course_title: 'FRACTURE MECHANICS',
// 		course_id: 4192
// 	},
// 	{
// 		course_no: 'ECE F241',
// 		course_title: 'MICROPROCESSORS &\nINTERFACING',
// 		course_id: 4193
// 	},
// 	{
// 		course_no: 'ECE F242',
// 		course_title: 'CONTROL SYSTEMS',
// 		course_id: 4194
// 	},
// 	{
// 		course_no: 'ECE F243',
// 		course_title: 'SIGNALS & SYSTEMS',
// 		course_id: 4195
// 	},
// 	{
// 		course_no: 'ECE F244',
// 		course_title: 'MICROELECTRONIC\nCIRCUITS',
// 		course_id: 4196
// 	},
// 	{
// 		course_no: 'ECE F266',
// 		course_title: 'STUDY PROJECT',
// 		course_id: 4197
// 	},
// 	{
// 		course_no: 'ECE F341',
// 		course_title: 'ANALOG ELECTRONICS',
// 		course_id: 4198
// 	},
// 	{
// 		course_no: 'ECE F343',
// 		course_title: 'COMMUNICATION NETWORKS',
// 		course_id: 4199
// 	},
// 	{
// 		course_no: 'ECE F344',
// 		course_title: 'INFORMATION THEORY & CODING',
// 		course_id: 4200
// 	},
// 	{
// 		course_no: 'ECE F366',
// 		course_title: 'LABORATORY PROJECT',
// 		course_id: 4201
// 	},
// 	{
// 		course_no: 'ECE F367',
// 		course_title: 'LABORATORY PROJECT',
// 		course_id: 4202
// 	},
// 	{
// 		course_no: 'ECE F376',
// 		course_title: 'DESIGN PROJECT',
// 		course_id: 4203
// 	},
// 	{
// 		course_no: 'ECE F377',
// 		course_title: 'DESIGN PROJECT',
// 		course_id: 4204
// 	},
// 	{
// 		course_no: 'ECE F418',
// 		course_title: 'MODERN COMMUNICATION TECHNOLOGIES',
// 		course_id: 4205
// 	},
// 	{
// 		course_no: 'ECE F431',
// 		course_title: 'MOBILE TELECOMMUNICATION NETWORKS',
// 		course_id: 4206
// 	},
// 	{
// 		course_no: 'ECE F491',
// 		course_title: 'SPECIAL PROJECT',
// 		course_id: 4207
// 	},
// 	{
// 		course_no: 'ECON F211',
// 		course_title: 'PRINCIPLES OF ECONOMICS',
// 		course_id: 4208
// 	},
// 	{
// 		course_no: 'ECON F212',
// 		course_title: 'FUNDA OF FIN AND ACCOUNT',
// 		course_id: 4209
// 	},
// 	{
// 		course_no: 'ECON F241',
// 		course_title: 'ECONOMETRIC METHODS',
// 		course_id: 4210
// 	},
// 	{
// 		course_no: 'ECON F242',
// 		course_title: 'MICROECONOMICS',
// 		course_id: 4211
// 	},
// 	{
// 		course_no: 'ECON F243',
// 		course_title: 'MACROECONOMICS',
// 		course_id: 4212
// 	},
// 	{
// 		course_no: 'ECON F244',
// 		course_title: 'ECONOMIC OF GROWTH & DEV',
// 		course_id: 4213
// 	},
// 	{
// 		course_no: 'ECON F266',
// 		course_title: 'STUDY PROJECT',
// 		course_id: 4214
// 	},
// 	{
// 		course_no: 'ECON F315',
// 		course_title: 'FINANCIAL MANAGEMENT',
// 		course_id: 4215
// 	},
// 	{
// 		course_no: 'ECON F341',
// 		course_title: 'PUBLIC FINANCE THEORY & POLICY',
// 		course_id: 4216
// 	},
// 	{
// 		course_no: 'ECON F342',
// 		course_title: 'APPLIED ECONOMETRICS',
// 		course_id: 4217
// 	},
// 	{
// 		course_no: 'ECON F343',
// 		course_title: 'ECONOMIC ANAL OF PUB\nPOL',
// 		course_id: 4218
// 	},
// 	{
// 		course_no: 'ECON F354',
// 		course_title: 'DERIVATIVES & RISK MANAGEMENT',
// 		course_id: 4219
// 	},
// 	{
// 		course_no: 'ECON F355',
// 		course_title: 'BUSINESS ANALYSIS AND VALUATION',
// 		course_id: 4220
// 	},
// 	{
// 		course_no: 'ECON F366',
// 		course_title: 'LABORATORY PROJECT',
// 		course_id: 4221
// 	},
// 	{
// 		course_no: 'ECON F367',
// 		course_title: 'LABORATORY PROJECT',
// 		course_id: 4222
// 	},
// 	{
// 		course_no: 'ECON F376',
// 		course_title: 'DESIGN PROJECT',
// 		course_id: 4223
// 	},
// 	{
// 		course_no: 'ECON F377',
// 		course_title: 'DESIGN PROJECT',
// 		course_id: 4224
// 	},
// 	{
// 		course_no: 'ECON F412',
// 		course_title: 'SECURITY ANALYSIS AND PORTFOLIO MANAGEMENT',
// 		course_id: 4225
// 	},
// 	{
// 		course_no: 'ECON F415',
// 		course_title: 'NEW VENTURE CREATION',
// 		course_id: 4226
// 	},
// 	{
// 		course_no: 'ECON F435',
// 		course_title: 'MARKETING RESEARCH',
// 		course_id: 4227
// 	},
// 	{
// 		course_no: 'ECON F491',
// 		course_title: 'SPECIAL PROJECT',
// 		course_id: 4228
// 	},
// 	{
// 		course_no: 'EEE F241',
// 		course_title: 'MICROPROCESSORS &\nINTERFACING',
// 		course_id: 4229
// 	},
// 	{
// 		course_no: 'EEE F242',
// 		course_title: 'CONTROL SYSTEMS',
// 		course_id: 4230
// 	},
// 	{
// 		course_no: 'EEE F243',
// 		course_title: 'SIGNALS & SYSTEMS',
// 		course_id: 4231
// 	},
// 	{
// 		course_no: 'EEE F244',
// 		course_title: 'MICROELECTRONIC\nCIRCUITS',
// 		course_id: 4232
// 	},
// 	{
// 		course_no: 'EEE F266',
// 		course_title: 'STUDY PROJECT',
// 		course_id: 4233
// 	},
// 	{
// 		course_no: 'EEE F312',
// 		course_title: 'POWER SYSTEMS',
// 		course_id: 4234
// 	},
// 	{
// 		course_no: 'EEE F341',
// 		course_title: 'ANALOG ELECTRONICS',
// 		course_id: 4235
// 	},
// 	{
// 		course_no: 'EEE F342',
// 		course_title: 'POWER ELECTRONICS',
// 		course_id: 4236
// 	},
// 	{
// 		course_no: 'EEE F366',
// 		course_title: 'LABORATORY PROJECT',
// 		course_id: 4237
// 	},
// 	{
// 		course_no: 'EEE F367',
// 		course_title: 'LABORATORY PROJECT',
// 		course_id: 4238
// 	},
// 	{
// 		course_no: 'EEE F376',
// 		course_title: 'DESIGN PROJECT',
// 		course_id: 4239
// 	},
// 	{
// 		course_no: 'EEE F377',
// 		course_title: 'DESIGN PROJECT',
// 		course_id: 4240
// 	},
// 	{
// 		course_no: 'EEE F411',
// 		course_title: 'INTERNET OF THINGS',
// 		course_id: 4241
// 	},
// 	{
// 		course_no: 'MATH F432',
// 		course_title: 'APPLIED STATISTICAL METHODS',
// 		course_id: 4303
// 	},
// 	{
// 		course_no: 'MATH F456',
// 		course_title: 'COSMOLOGY',
// 		course_id: 4304
// 	},
// 	{
// 		course_no: 'MATH F491',
// 		course_title: 'SPECIAL PROJECT',
// 		course_id: 4305
// 	},
// 	{
// 		course_no: 'ME F218',
// 		course_title: 'ADVANCED MECHANICS OF SOLIDS',
// 		course_id: 4306
// 	},
// 	{
// 		course_no: 'ME F219',
// 		course_title: 'MANUFACTURING PROCESSES',
// 		course_id: 4307
// 	},
// 	{
// 		course_no: 'ME F243',
// 		course_title: 'PRODUCTION TECHNIQUES',
// 		course_id: 4308
// 	},
// 	{
// 		course_no: 'ME F220',
// 		course_title: 'HEAT TRANSFER',
// 		course_id: 4309
// 	},
// 	{
// 		course_no: 'ME F221',
// 		course_title: 'MECHANISMS AND\nMACHINES',
// 		course_id: 4310
// 	},
// 	{
// 		course_no: 'ME F244',
// 		course_title: 'KIN & DYN OF  MACHINES',
// 		course_id: 4311
// 	},
// 	{
// 		course_no: 'ME F266',
// 		course_title: 'STUDY PROJECT',
// 		course_id: 4312
// 	},
// 	{
// 		course_no: 'ME F313',
// 		course_title: 'PRODUCTION TECHNIQUES II',
// 		course_id: 4313
// 	},
// 	{
// 		course_no: 'ME F341',
// 		course_title: 'PRIMEMOVERS & FLUID MACH',
// 		course_id: 4314
// 	},
// 	{
// 		course_no: 'ME F343',
// 		course_title: 'MECHANICAL VIBRATIONS',
// 		course_id: 4315
// 	},
// 	{
// 		course_no: 'ME F344',
// 		course_title: 'ENGINEERING OPTIMIZATION',
// 		course_id: 4316
// 	},
// 	{
// 		course_no: 'ME F366',
// 		course_title: 'LABORATORY PROJECT',
// 		course_id: 4317
// 	},
// 	{
// 		course_no: 'ME F367',
// 		course_title: 'LABORATORY PROJECT',
// 		course_id: 4318
// 	},
// 	{
// 		course_no: 'ME F376',
// 		course_title: 'DESIGN PROJECT',
// 		course_id: 4319
// 	},
// 	{
// 		course_no: 'ME F377',
// 		course_title: 'DESIGN PROJECT',
// 		course_id: 4320
// 	},
// 	{
// 		course_no: 'ME F420',
// 		course_title: 'POWER PLANT\nENGINEERING',
// 		course_id: 4321
// 	},
// 	{
// 		course_no: 'ME F451',
// 		course_title: 'MECHANICAL EQUIPMENT\nDESIGN',
// 		course_id: 4322
// 	},
// 	{
// 		course_no: 'ME F461',
// 		course_title: 'REFRIGERATION AND AIR\nCONDITIONING',
// 		course_id: 4323
// 	},
// 	{
// 		course_no: 'ME F491',
// 		course_title: 'SPECIAL PROJECTS',
// 		course_id: 4324
// 	},
// 	{
// 		course_no: 'ME G515',
// 		course_title: 'COMPUT FLUID DYNAMICS',
// 		course_id: 4325
// 	},
// 	{
// 		course_no: 'ME G641',
// 		course_title: 'THEORY OF ELASTICITY AND PLASTICITY',
// 		course_id: 4326
// 	},
// 	{
// 		course_no: 'MGTS F211',
// 		course_title: 'PRINCIPLES OF MANAGEMENT',
// 		course_id: 4327
// 	},
// 	{
// 		course_no: 'MPH G510',
// 		course_title: 'BIOSTATISTICS & COMPUTERS IN PUBLIC\nHEALTH',
// 		course_id: 4328
// 	},
// 	{
// 		course_no: 'PHY F215',
// 		course_title: 'INTRODUCTION TO ASTRONOMY & ASTROPHYSICS',
// 		course_id: 4329
// 	},
// 	{
// 		course_no: 'PHY F241',
// 		course_title: 'ELECTROMAGNETIC THEO II',
// 		course_id: 4330
// 	},
// 	{
// 		course_no: 'PHY F242',
// 		course_title: 'QUANTUM MECHANICS I',
// 		course_id: 4331
// 	},
// 	{
// 		course_no: 'PHY F243',
// 		course_title: 'MATHE METHODS OF PHY',
// 		course_id: 4332
// 	},
// 	{
// 		course_no: 'PHY F244',
// 		course_title: 'MODERN PHY LAB',
// 		course_id: 4333
// 	},
// 	{
// 		course_no: 'PHY F266',
// 		course_title: 'STUDY PROJECT',
// 		course_id: 4334
// 	},
// 	{
// 		course_no: 'PHY F315',
// 		course_title: 'THEORY OF RELATIVITY',
// 		course_id: 4335
// 	},
// 	{
// 		course_no: 'PHY F341',
// 		course_title: 'SOLID STATE PHYSICS',
// 		course_id: 4336
// 	},
// 	{
// 		course_no: 'PHY F342',
// 		course_title: 'ATOMIC & MOLECULAR PHY',
// 		course_id: 4337
// 	},
// 	{
// 		course_no: 'PHY F343',
// 		course_title: 'NUCLEAR & PARTICLE PHY',
// 		course_id: 4338
// 	},
// 	{
// 		course_no: 'PHY F344',
// 		course_title: 'ADVANCED PHYSICS LAB',
// 		course_id: 4339
// 	},
// 	{
// 		course_no: 'PHY F366',
// 		course_title: 'LABORATORY PROJECT',
// 		course_id: 4340
// 	},
// 	{
// 		course_no: 'PHY F367',
// 		course_title: 'LABORATORY PROJECT',
// 		course_id: 4341
// 	},
// 	{
// 		course_no: 'PHY F376',
// 		course_title: 'DESIGN PROJECT',
// 		course_id: 4342
// 	},
// 	{
// 		course_no: 'PHY F377',
// 		course_title: 'DESIGN PROJECT',
// 		course_id: 4343
// 	},
// 	{
// 		course_no: 'PHY F412',
// 		course_title: 'INTRODUCTION TO QUANTUM FIELD THEORY',
// 		course_id: 4344
// 	},
// 	{
// 		course_no: 'PHY F346',
// 		course_title: 'LASER SCIENCE AND TECHNOLOGY',
// 		course_id: 4345
// 	},
// 	{
// 		course_no: 'PHY F420',
// 		course_title: 'QUANTUM OPTICS',
// 		course_id: 4346
// 	},
// 	{
// 		course_no: 'PHY F423',
// 		course_title: 'SPECIAL TOPICS IN STATISTICAL MECHANICS',
// 		course_id: 4347
// 	},
// 	{
// 		course_no: 'PHY F426',
// 		course_title: 'PHYSICS OF SEMICONDUCTOR\nDEVICES',
// 		course_id: 4348
// 	},
// 	{
// 		course_no: 'PHY F491',
// 		course_title: 'SPECIAL PROJECT',
// 		course_id: 4349
// 	}
// ];
