new Vue({
	el: '#portfolioPage',
	data: {
		message: 'hey',
		slides: [{
				title: 'Brewer\'s Alley'
			},
			{
				title: 'Another project'
			},
			{
				title: 'And another project'
			}
		],
		descriptions: [{
				title: 'Environmental Design And Resource Center',
				location: 'Jessup, Maryland',
				text: 'A multiple occupancy office and demonstration center for sustainable building materials, products and systems, combining new construction with an existing 19th century farmhouse, and utilizing structural insulated panels, masonry trombe walls, sub-floor cellular slab duct and radiant floor heating systems, PV solar panels, composting toilets, natural daylighting, rainwater collection, engineered wood products, and a living roof system.'
			},
			{
				title: 'Townhome Project',
				location: 'Frederick, Maryland',
				text: 'A five unit, three story townhouse structure above base level parking, consisting of light wood framing with trussed roof, brick veneer and vinyl siding, and concrete foundations, located within the designated Fredericktowne Historic District. Design incorporates engineered wood products throughout.'
			},
			{
				title: 'Automotive Research Park',
				location: 'Summit Point, West Virginia',
				text: 'Structural engineering design and consulting services for automotive research park facilities, including a 39,360 sq.ft. Gasoline Alley garage facility, 1,058 sq.ft. Registration Building, 2,162 sq.ft. Concession / Bath House, and 6,400 sq.ft. Race Control Building. Project incorporates use of passive solar heating, natural ventilation and daylighting strategies, structural insulated panels, and ICF foundations.'
			},
			{
				title: '"Market-On-Market" Public Market Facility',
				location: 'Frederick, Maryland',
				text: 'Assisted with planning and design concept studies, and prepared detailed development and construction cost estimates for proposed 16,400 SF public market facility in downtown Frederick.'
			},
			{
				title: 'Assessment Of Hurricane Damage To Agricultural Facilities And Infrastructure',
				location: 'St. Kitts, Nevis, & Antigua, Eastern Carribean Basin',
				text: 'An engineering and consulting services project for assessment of hurricane damage and preparation of remediation proposals for agricultural and agribusiness related facilities and infrastructure on the islands of St. Kitts, Nevis and Antigua of the lower Carribean basin, in cooperation with the U.S. State Department\'s Agency for International Development and the U.S. Department of Agriculture\'s Foreign Agricultural Service.'
			},
			{
				title: 'New Concrete Residence',
				location: 'Leesburg, Loudoun County, Virginia',
				text: 'Performed structural engineering analysis and design of building envelope, floors and roof framing systems, foundations and footings, and site area retaining wall systems for contemporary style, all concrete masonry private residence, featured as a Showcase Home by the Northeast Cement Shippers Association, for the Washington, D.C. metroplex area. Home was sited on a steeply sloping and heavily wooded site, and demonstrated innovative uses of various concrete masonry product lines and systems.'
			},
			{
				title: 'Outdoor Deck For Restaurant',
				location: 'Frederick, Maryland',
				text: 'Performed structural design and prepared construction documents for installation of a 1000 sq.ft. elevated wood deck structure overlooking Carroll Creek Park, for additional outdoor restaurant seating, in downtown Fredericktowne Historic District, Frederick City, MD.'
			}
		]
	}
});