import {make_polygon_from_vertices} from '../helper'

export default function make_track_1 ( scene ) {
  const left_walls = [
    {x:-399.9999940395356, y:-9.999999850988331},{x:-339.9999949336052, y:-7.499999888241234},{x:-329.9999950826171, y:-485.3333261013032},{x:-299.9999955296519, y:-577.8333247229458},{x:-314.9999953061345, y:-690.3333230465653},{x:-119.99999821186088, y:-1101.7222058052823},{x:-319.9999952316287, y:-1504.2221998075652},{x:-322.49999519437574, y:-1814.8888618449382},{x:-277.499995864928, y:-1982.3888593489937},{x:-312.49999534338735, y:-2224.8888557354626},{x:-299.99999552965187, y:-2467.7221854502973},{x:-302.49999549239897, y:-2865.2221795270857},{x:-224.99999664723885, y:-3019.833288334312},{x:-159.99999761581432, y:-3099.833287142219},{x:-9.999999850988388, y:-3197.3332856893558},{x:102.49999847263098, y:-3379.833282969894},{x:-242.49999638646852, y:-3631.9443903242573},{x:-232.49999653548014, y:-3801.94438779106},{x:-152.49999772757303, y:-3936.944385779403},{x:169.9999974668027, y:-4180.833271034065},{x:62.49999906867754, y:-4330.8332687988905},{x:-252.49999623745686, y:-4603.333264738324},{x:-289.99999567866325, y:-4686.166596837344},{x:-307.49999541789293, y:-4943.666593000295},{x:-284.99999575316906, y:-5172.555478478471},{x:-337.4999949708581, y:-5262.555477137366},{x:-302.49999549239874, y:-5407.555474976698},{x:-304.99999545514584, y:-6070.388798433044},{x:-314.9999953061342, y:-6467.499903626737},{x:-367.49999452382326, y:-7007.111006697014},{x:-352.4999947473407, y:-7153.888782287633},{x:-344.9999948590994, y:-7830.999883309},{x:-389.99999418854713, y:-8013.499880589538},{x:-334.99999500811094, y:-8234.888766179474},{x:-122.49999817460764, y:-8824.88875738779},{x:-122.49999817460758, y:-9291.999861538401},{x:-364.99999456107605, y:-9727.33318838476},{x:-332.4999950453638, y:-9997.333184361447},{x:-397.4999940767883, y:-9994.8331843987}

  ]
  const center_start = [
    {x:-176.00000000000023, y:-3.555555555555543},{x:-166.00000000000023, y:-45.55555555555554},{x:-194.00000000000023, y:-149.55555555555554},{x:-200.00000000000023, y:-235.55555555555554},{x:-178.00000000000023, y:-313.55555555555554},{x:-180.00000000000023, y:-433.55555555555554},{x:-174.00000000000023, y:-599.5555555555555},{x:-154.00000000000023, y:-715.5555555555555},{x:-98.00000000000023, y:-831.5555555555555},{x:9.999999999999773, y:-963.5555555555555},{x:67.99999999999977, y:-1083.5555555555557},{x:125.99999999999977, y:-989.5555555555555},{x:185.99999999999977, y:-897.5555555555555},{x:247.99999999999977, y:-809.5555555555555},{x:299.9999999999998, y:-729.5555555555555},{x:397.9999999999998, y:-569.5555555555555},{x:397.9999999999998, y:-5.555555555555543},
  ]

  const right_walls = [
    {x:398, y:-956.666666666667},{x:324, y:-1006.666666666667},{x:284, y:-1146.666666666667},{x:292, y:-1222.666666666667},{x:336, y:-1360.666666666667},{x:342, y:-1571.777777777778},{x:320, y:-1669.777777777778},{x:342, y:-1721.777777777778},{x:322, y:-1915.777777777778},{x:316, y:-2095.7777777777783},{x:286, y:-2230.8888888888896},{x:274, y:-2292.8888888888896},{x:294, y:-2408.8888888888896},{x:274, y:-2525.7777777777783},{x:272, y:-2859.7777777777783},{x:286, y:-2937.7777777777783},{x:272, y:-2999.7777777777783},{x:274.0000000000001, y:-3370.8888888888896},{x:256.0000000000001, y:-3486.8888888888896},{x:204.0000000000001, y:-3534.8888888888896},{x:94.00000000000011, y:-3572.8888888888896},{x:1.1368683772161603e-13, y:-3656.8888888888896},{x:-39.999999999999886, y:-3734.8888888888896},{x:-31.999999999999886, y:-3812.8888888888896},{x:10.000000000000114, y:-3884.8888888888896},{x:84.00000000000011, y:-3924.8888888888896},{x:202.0000000000001, y:-3987.777777777779},{x:256.0000000000001, y:-4053.777777777779},{x:280.0000000000001, y:-4139.777777777779},{x:282.0000000000001, y:-4383.777777777779},{x:236.00000000000023, y:-4432.888888888889},{x:94.00000000000017, y:-4532.888888888889},{x:58.00000000000017, y:-4574.888888888889},{x:-135.99999999999983, y:-4698.888888888889},{x:-67.99999999999983, y:-4876.888888888889},{x:-55.99999999999983, y:-4952.888888888889},{x:-53.99999999999983, y:-5004.888888888889},{x:-25.99999999999983, y:-5068.888888888889},{x:-13.999999999999943, y:-5198.444444444443},{x:-1.9999999999999432, y:-5274.444444444443},{x:5.684341886080802e-14, y:-5358.444444444443},{x:24.000000000000057, y:-5358.444444444443},{x:70.00000000000006, y:-5306.444444444443},{x:138, y:-5252.444444444443},{x:200, y:-5180.444444444443},{x:240, y:-5100.444444444443},{x:286, y:-5020.444444444443},{x:342, y:-4932.444444444443},{x:402, y:-4882.444444444443}
  ]

  const right_walls_upper = [
    {x:399.9999999999966, y:-5409.555555555553},{x:211.9999999999966, y:-5559.555555555553},{x:195.9999999999966, y:-5623.555555555553},{x:197.9999999999966, y:-5781.555555555553},{x:191.9999999999966, y:-5849.555555555553},{x:179.9999999999966, y:-5915.555555555553},{x:189.9999999999966, y:-5935.555555555553},{x:189.9999999999966, y:-5985.555555555553},{x:191.9999999999966, y:-6046.222222222217},{x:187.9999999999966, y:-6094.222222222217},{x:271.9999999999966, y:-6302.222222222217},{x:333.9999999999966, y:-6530.222222222217},{x:331.9999999999966, y:-6612.222222222217},{x:321.9999999999966, y:-6658.222222222217},{x:319.9999999999966, y:-6777.333333333327},{x:337.9999999999966, y:-6823.333333333327},{x:353.9999999999966, y:-6895.333333333327},{x:353.9999999999966, y:-6935.333333333327},{x:377.9999999999966, y:-6991.333333333327},{x:377.9999999999967, y:-7314.666666666659},{x:371.9999999999967, y:-7466.666666666659},{x:369.9999999999967, y:-7590.666666666659},{x:365.9999999999966, y:-7657.555555555546},{x:361.9999999999966, y:-7957.555555555546},{x:367.9999999999966, y:-7989.555555555546},{x:367.9999999999966, y:-8119.555555555546},{x:313.9999999999966, y:-8275.555555555546},{x:201.9999999999966, y:-8459.555555555546},{x:141.9999999999966, y:-8600.444444444433},{x:97.99999999999665, y:-8748.444444444433},{x:87.99999999999665, y:-8900.444444444433},{x:79.99999999999665, y:-8938.444444444433},{x:79.99999999999665, y:-9142.444444444433},{x:87.99999999999665, y:-9241.33333333332},{x:95.99999999999665, y:-9313.33333333332},{x:95.99999999999665, y:-9393.33333333332},{x:239.9999999999966, y:-9679.33333333332},{x:249.9999999999966, y:-9719.33333333332},{x:251.9999999999966, y:-9761.33333333332},{x:251.9999999999966, y:-9879.33333333332},{x:261.9999999999966, y:-9901.33333333332},{x:267.9999999999966, y:-9997.33333333332},{x:395.9999999999966, y:-9997.33333333332}
  ]

  const center_diamond = [
    {x:-43.333331611422864, y:-6672.4441793053265},{x:-116.66666203075147, y:-6839.110839349255},{x:-163.3333268430514, y:-6972.4441673843985},{x:-159.99999364217285, y:-7109.11082862042},{x:-156.6666604412943, y:-7319.11082027577},{x:-143.33332763778003, y:-7462.4441479135485},{x:-143.33332763778003, y:-7549.110811136391},{x:-143.33332763778003, y:-7619.1108083548415},{x:-163.3333268430514, y:-7725.777470782956},{x:-159.99999364217285, y:-7899.110797228642},{x:-156.6666604412943, y:-7952.4441284426985},{x:-133.3333280351443, y:-8042.44412486642},{x:-89.99999642372279, y:-8135.77745449102},{x:-59.99999761581569, y:-8225.77745091474},{x:-43.333331611422864, y:-8332.444113342855},{x:-39.99999841054421, y:-8382.444111356033},{x:-16.6666660043943, y:-8445.777442172726},{x:9.999999602634375, y:-8402.444110561306},{x:13.333332803512917, y:-8355.777445749005},{x:33.33333200878428, y:-8289.110781731433},{x:69.99999721844858, y:-8219.110784512985},{x:99.9999960263558, y:-8129.110788089263},{x:123.33332843250582, y:-8035.777458464663},{x:139.99999443689876, y:-7949.11079524182},{x:146.66666083865584, y:-7922.444129634791},{x:143.3333276377773, y:-7839.110799612827},{x:143.3333276377773, y:-7635.7774743592345},{x:129.9999948342629, y:-7589.110809546934},{x:143.3333276377773, y:-7465.777481114427},{x:146.66666083865584, y:-7319.11082027577},{x:163.33332684304878, y:-7179.1108258388695},{x:169.99999324480586, y:-7039.110831401969},{x:79.99999682108432, y:-6839.110839349255},
  ]

  make_polygon_from_vertices( -290,-4235, left_walls, scene )
  make_polygon_from_vertices( 80,-560, center_start, scene )
  make_polygon_from_vertices( 204,-3741,right_walls, scene )
  make_polygon_from_vertices( 274,-7970,right_walls_upper, scene )
  make_polygon_from_vertices( 10,-7825,center_diamond, scene )

  scene.add.image(
    0,
    0,
    // width_game * 2,
    // height_game * 2,
    'track_1'
  ).setOrigin( 0.5,1 )

}