import {format} from 'date-fns'

export const COLUMNS1_1=[
    {
        Header: '#',
        accessor: (cell, index) => index + 1 
    },
    {
        Header:'Line',
        accessor:'Name'
    },
    {
        Header:'Shift',
        accessor:'Shift'
    },
    {
        Header:'Variant',
        accessor:'Variant'
    },
    {
        Header:'Part Number',
        accessor:'Part_Number'
    },
    {
        Header:'Date & Time',
        accessor:'End_Time',
        //Cell: ({value})=> {return format(new Date(value),'dd/MM/yyyy hh:mm:ss a')}
    },
    {
        Header:'Machining Surface 1',
        accessor:'Machining_Surface_1'
    },
    {
        Header:'Machining Surface 2',
        accessor:'Machining_Surface_2'
    },
    {
        Header:'Circularity F Rr center hole',
        accessor:'Circularity_F_Rr_center_hole'
    },
    {
        Header:'Dia Fr axis',
        accessor:'Dia_Fr_axis'
    },
    {
        Header:'Position Fr center datum hole',
        accessor:'Position_Fr_center_datum_hole'
    },
    {
        Header:'Position Rr center datum hole',
        accessor:'Position_Rr_center_datum_hole'
    },
    {
        Header:'Position Fr boss axis end face',
        accessor:'Position_Fr_boss_axis_end_face'
    },
    {
        Header:'Width Fr end face Rr end face',
        accessor:'Width_Fr_end_face_Rr_end_face'
    },
    {
        Header:'Dia Rr boss',
        accessor:'Dia_Rr_boss'
    },
    {
        Header:'Dia Rr axis',
        accessor:'Dia_Rr_axis'
    },    
    {
        Header:'Dia Rr axis relief groove',
        accessor:'Dia_Rr_axis_relief_groove'
    },    
    {
        Header:'Dia Rr oil seal press fitting axis',
        accessor:'Dia_Rr_oil_seal_press_fitting_axis'
    },    
    {
        Header:'Dia NE press fitting axis 1',
        accessor:'Dia_NE_press_fitting_axis_1'
    },    
    {
        Header:'Dia NE press fitting axis 2',
        accessor:'Dia_NE_press_fitting_axis_2'
    },    
    {
        Header:'Dia Fr boss axis',
        accessor:'Dia_Fr_boss_axis'
    },    
    {
        Header:'Remarks',
        accessor:'Remarks'
    },  

]
export const COLUMNS1_2=[
    {
        Header: '#',
        accessor: (cell, index) => index + 1 
    },
    {
        Header:'Line',
        accessor:'Name'
    },
    {
        Header:'Shift',
        accessor:'Shift'
    },
    {
        Header:'Variant',
        accessor:'Variant'
    },
    {
        Header:'Part Number',
        accessor:'Part_Number'
    },
    {
        Header:'Date & Time',
        accessor:'Start_Time',
        //Cell: ({value})=> {return format(new Date(value),'dd/MM/yyyy hh:mm:ss a')}
    },
    {
        Header:'Machining Position fly wheel fitting face 1',
        accessor:'Position_fly_wheel_fitting_face'
    },
    {
        Header:'Position Clamp center Rr end face',
        accessor:'Position_Clamp_center_Rr_end_face'
    },
    {
        Header:'Position Clamp center Fr end face 1 pin OD datum and both centers datum',
        accessor:'Position_Clamp_center_Fr_end_face_1_pin_OD_datum_and_both_centers_datum'
    },
    {
        Header:'Position machining datum face',
        accessor:'Position_machining_datum_face'
    },
    {
        Header:'Position machining datum face Both center datum',
        accessor:'Position_machining_datum_face_Both_center_datum'
    },
    {
        Header:'Run out Fr axis',
        accessor:'Run_out_Fr_axis'
    },
    {
        Header:'Run out Fr boss axis',
        accessor:'Run_out_Fr_boss_axis'
    },
    {
        Header:'Run out Rr axis',
        accessor:'Run_out_Rr_axis'
    },
    {
        Header:'Run out S fitting axis',
        accessor:'Run_out_S_fitting_axis'
    },
    {
        Header:'Run out fly wheel fitting face',
        accessor:'Run_out_fly_wheel_fitting_face'
    },    
    {
        Header:'Perpendicularity fly wheel fitting face',
        accessor:'DPerpendicularity_fly_wheel_fitting_face'
    },    
    {
        Header:'Run out Sensor plate fitting',
        accessor:'Run_out_Sensor_plate_fitting'
    },    
   
    {
        Header:'Remarks',
        accessor:'Remarks'
    },  

]

export const COLUMNS2_1=[
    {
        Header: '#',
        accessor: (cell, index) => index + 1 
    },
    {
        Header:'Line',
        accessor:'Name'
    },
    {
        Header:'Shift',
        accessor:'Shift'
    },
    {
        Header:'Variant',
        accessor:'Variant'
    },
    {
        Header:'Part Number',
        accessor:'Part_Number'
    },
    {
        Header:'Date & Time',
        accessor:'Start_Time',
        //Cell: ({value})=> {return format(new Date(value),'dd/MM/yyyy hh:mm:ss a')}
    },
    {
        Header:'Machining identification groove surface',
        accessor:'Machining_identification_groove_surface'
    },
    {
        Header:'Serial Number Engraving surface',
        accessor:'Serial_Number_Engraving_surface'
    },
    {
        Header:'Machining Surface  ',
        accessor:'Machining_Surface__'
    },
    //{
       // Header:'Machining Surface  ',
        //accessor:'Machining_Surface__'
    //},
    {
        Header:'Diameter 1 4 Pin 1 GD',
        accessor:'Diameter_1_4_Pin_1_GD'
    },
    {
        Header:'Diameter 2 5 Journal',
        accessor:'Diameter_2_5_Journal'
    },
    {
        Header:'Diameter 3 4 Journal',
        accessor:'Diameter_3_4_Journal'
    },
    {
        Header:'Diameter Fr Boss Axis',
        accessor:'Diameter_Fr_Boss_Axis'
    },
    {
        Header:'Diameter Fr axis Relief groove',
        accessor:'Diameter_Fr_axis_Relief_groove'
    },
    {
        Header:'Diameter Fr axis',
        accessor:'Diameter_Fr_axis'
    },    
    {
        Header:'Width 5 Journal',
        accessor:'Width_5_Journal'
    },    
    {
        Header:'Width 2 Journal',
        accessor:'Width_2_Journal'
    },    
    {
        Header:'Width 3 4 Journal',
        accessor:'Width_3_4_Journal'
    }, 
    {
        Header:'Width 1 4 Pin',
        accessor:'Width_1_4_Pin'
    }, 
    {
        Header:'Length 1 Journal',
        accessor:'Length_1_Journal'
    },    
    {
        Header:'Diameter 1 journal 1',
        accessor:'Diameter_1_journal_1'
    },    
    {
        Header:'Diameter 1 journal 2',
        accessor:'Diameter_1_journal_2_1'
    },        
    {
        Header:'qc 2 1 remarks',
        accessor:'qc_2_1_remarks'
    },  

]





export const COLUMNS2_2=[
    {
        Header: '#',
        accessor: (cell, index) => index + 1 
    },
    {
        Header:'Line',
        accessor:'Name'
    },
    {
        Header:'Shift',
        accessor:'Shift'
    },
    {
        Header:'Variant',
        accessor:'Variant'
    },
    {
        Header:'Part Number',
        accessor:'Part_Number'
    },
    {
        Header:'Date & Time',
        accessor:'Start_Time',
        //Cell: ({value})=> {return format(new Date(value),'dd/MM/yyyy hh:mm:ss a')}
    },
    {
        Header:'Position 4 Pin end face',
        accessor:'Position_4_Pin_end_face'
    },
    {
        Header:'Position 4 Journal end face',
        accessor:'Position_4_Journal_end_face'
    },
    {
        Header:'Position 3 pin end face',
        accessor:'Position_3_pin_end_face'
    },
    {
        Header:'Position 3 Journal end face',
        accessor:'Position_3_Journal_end_face'
    },
    {
        Header:'Position 2 Pin end face',
        accessor:'Position_2_Pin_end_face'
    },
    {
        Header:'Position 1 Pin end face',
        accessor:'Position_1_Pin_end_face'
    },
    {
        Header:'Position 2 Journal end face',
        accessor:'Position_2_Journal_end_face'
    },
    {
        Header:'Position Fr axis end face',
        accessor:'Position_Fr_axis_end_face'
    },
    {
        Header:'Position 1 Journal end face',
        accessor:'Position_1_Journal_end_face'
    },
    {
        Header:'Position 1 Journal relief end face',
        accessor:'Position_1_Journal_relief_end_face'
    },    
    {
        Header:'Position 5 Journal end face',
        accessor:'Position_5_Journal_end_face'
    },    
    //{
    //    Header:'Position 5 Journal end face',
     //   accessor:'Position_5_Journal_end_face'
    //},    
    {
        Header:'Run out Fr axis',
        accessor:'Run_out_Fr_axis'
    }, 
    {
        Header:'Run out 1 Journal',
        accessor:'Run_out_1_Journal'
    }, 
    {
        Header:'Run out 2 Journal',
        accessor:'Run_out_2_Journal'
    },    
    {
        Header:'Run out 3 4 Journal',
        accessor:'Run_out_3_4_Journal'
    },    
    {
        Header:'Run out 5 Journal',
        accessor:'Run_out_5_Journal'
    }, 
    {
        Header:'Position 1 4 Pin',
        accessor:'Position_1_4_Pin'
    }, 
       
    {
        Header:'Remarks',
        accessor:'Remarks'
    },  

]





export const COLUMNS3_1=[
    {
        Header: '#',
        accessor: (cell, index) => index + 1 
    },
    {
        Header:'Line',
        accessor:'Name'
    },
    {
        Header:'Shift',
        accessor:'Shift'
    },
    {
        Header:'Variant',
        accessor:'Variant'
    },
    {
        Header:'Part Number',
        accessor:'Part_Number'
    },
    {
        Header:'Date & Time',
        accessor:'Start_Time',
        //Cell: ({value})=> {return format(new Date(value),'dd/MM/yyyy hh:mm:ss a')}
    },
    {
        Header:'Machining Surface',
        accessor:'Machining_Surface'
    },
    {
        Header:'Identification M_C',
        accessor:'Identification_M_C'
    },
    {
        Header:'Oil Holes Cross Point',
        accessor:'Oil_Holes_Cross_Point'
    },
    {
        Header:'Diameter Pin oil Holes Chamfer',
        accessor:'Diameter_Pin_oil_Holes_Chamfer'
    },
    {
        Header:' 5Jr oil holes chamfer position',
        accessor:'_5Jr_oil_holes_chamfer_position'
    },
    {
        Header:'2 4 Jr oil holes chamfer position',
        accessor:'_2_4_Jr_oil_holes_chamfer_position'
    },
    {
        Header:'Pin oil hole chamfer position',
        accessor:'Pin_oil_hole_chamfer_position'
    },
    {
        Header:'Diameter Jr Oil hole chamfer',
        accessor:'Diameter_Jr_Oil_hole_chamfer'
    },
    {
        Header:'Depth Jr Oil holes',
        accessor:'Depth_Jr_Oil_holes'
    },
    {
        Header:'Depth Pin Oil holes',
        accessor:'Depth_Pin_Oil_holes'
    },    
    {
        Header:'Remarks',
        accessor:'Remarks'
    },  

]


export const COLUMNS4_1=[
    {
        Header: '#',
        accessor: (cell, index) => index + 1 
    },
    {
        Header:'Line',
        accessor:'Name'
    },
    {
        Header:'Shift',
        accessor:'Shift'
    },
    {
        Header:'Variant',
        accessor:'Variant'
    },
    {
        Header:'Part Number',
        accessor:'Part_Number'
    },
    {
        Header:'Date & Time',
        accessor:'Start_Time',
        //Cell: ({value})=> {return format(new Date(value),'dd/MM/yyyy hh:mm:ss a')}
    },
    {
        Header:'Tempering color check',
        accessor:'Tempering_color_check'
    },
    {
        Header:'Cleanliness Machining surface',
        accessor:'Cleanliness_Machining_surface'
    },
    {
        Header:'Cleanliness Oil Holes',
        accessor:'Cleanliness_Oil_Holes'
    },
    {
        Header:' 2 5 Journals Hardening Range Fillet',
        accessor:'_2_5_Journals_Hardening_Range_Fillet'
    },
    {
        Header:' 1 Journals Hardening Range Fillet',
        accessor:'_1_Journals_Hardening_Range_Fillet'
    },
    {
        Header:' 5 Journal Non Hardening Range',
        accessor:'_5_Journal_Non_Hardening_Range'
    },
    {
        Header:' 1 Journal Non hardening range',
        accessor:'_1_Journal_Non_hardening_range'
    },
    {
        Header:'Surface Hardness 1 5 J fillet',
        accessor:'Surface_Hardness_1_5_J_fillet'
    },
    {
        Header:'Surface hardness Pins Fillet',
        accessor:'Surface_hardness_Pins_Fillet'
    },
    {
        Header:'Pins hardening range',
        accessor:'Pins_hardening_range'
    },    
    {
        Header:'Surface hardness 1 5 Journal axis 1',
        accessor:'Surface_hardness_1_5_Journal_axis_1'
    },    
    {
        Header:'Surface hardness 1 5 Journal_axis 2',
        accessor:'Surface_hardness_1_5_Journal_axis_2'
    },    
    {
        Header:'Surface hardness 1 5 Journal axis 3',
        accessor:'Surface_hardness_1_5_Journal_axis_3'
    }, 
    {
        Header:'Surface hardness 1 5 Journal axis 4',
        accessor:'Surface_hardness_1_5_Journal_axis_4'
    }, 
    {
        Header:'Surface hardness 1 5 Journal axis 5',
        accessor:'Surface_hardness_1_5_Journal_axis_5'
    },    
    {
        Header:'HardeningCrack',
        accessor:'Hardening_Crack'
    },    
    {
        Header:'Surface Hardness pin top 1',
        accessor:'Surface_Hardness_pin_top_1'
    }, 
    {
        Header:'Surface Hardness pin top 2',
        accessor:'Surface_Hardness_pin_top_2'
    }, 
       
    {
        Header:'Surface Hardness pin top 3',
        accessor:'Surface_Hardness_pin_top_3'
    },  
    {
        Header:'Surface Hardness pin top 4',
        accessor:'Surface_Hardness_pin_top_4'
    },  
    {
        Header:'Surface Hardness pin bottom 1',
        accessor:'Surface_Hardness_pin_bottom_1'
    },  
    {
        Header:'Surface Hardness pin bottom 2',
        accessor:'Surface_Hardness_pin_bottom_2'
    },  
    {
        Header:'Surface Hardness pin bottom_3',
        accessor:'Surface_Hardness_pin_bottom_3'
    },  
    {
        Header:'Surface Hardness pin bottom 4',
        accessor:'Surface_Hardness_pin_bottom_4'
    },  
    {
        Header:'Remarks',
        accessor:'Remarks'
    }, 
  



]
export const COLUMNS5_1=[
    {
        Header: '#',
        accessor: (cell, index) => index + 1 
    },
    {
        Header:'Line',
        accessor:'Name'
    },
    {
        Header:'Shift',
        accessor:'Shift'
    },
    {
        Header:'Variant',
        accessor:'Variant'
    },
    {
        Header:'Part Number',
        accessor:'Part_Number'
    },
    {
        Header:'Date & Time',
        accessor:'Start_Time',
        //Cell: ({value})=> {return format(new Date(value),'dd/MM/yyyy hh:mm:ss a')}
    },
    {
        Header:'Machining Surface',
        accessor:'Machining_Surface'
    },
    {
        Header:'_Machining surface',
        accessor:'_Machining_surface'
    },
    {
        Header:'__Machining surface',
        accessor:'__Machining_surface'
    },
    {
        Header:'Diameter Pilot BRG press fitting hole_1',
        accessor:'Diameter_Pilot_BRG_press_fitting_hole_1'
    },
    {
        Header:'Diameter Pilot BRG press fitting hole 2',
        accessor:'Diameter_Pilot_BRG_press_fitting_hole_2'
    },
    {
        Header:'Circularity Pilot BRG press fitting hole',
        accessor:'Circularity_Pilot_BRG_press_fitting_hole'
    },
    {
        Header:'DiameterxDepth Pilot BRG prepared hole',
        accessor:'DiameterxDepth_Pilot_BRG_prepared_hole'
    },
    {
        Header:'DiameterxDepth flywheel fitting hole before tapping',
        accessor:'DiameterxDepth_flywheel_fitting_hole_before_tapping'
    },
    {
        Header:'Thread hole sizexDepth Fly wheel fitting hole',
        accessor:'Thread_hole_sizexDepth_Fly_wheel_fitting_hole'
    },
    {
        Header:'Depth Pilot BRG press fitting hole',
        accessor:'Depth_Pilot_BRG_press_fitting_hole'
    },    
    {
        Header:'Circularity Rr center datum hole',
        accessor:'Circularity_Rr_center_datum_hole'
    },    
    {
        Header:'DiameterxDepth Pilot BRG press fitting guide hole',
        accessor:'DiameterxDepth_Pilot_BRG_press_fitting_guide_hole'
    },    
    {
        Header:'Circularity Fr center datum hole Fr',
        accessor:'Circularity_Fr_center_datum_hole_Fr'
    }, 
    {
        Header:'Thread hole sizexDepth Fr pulley fitting hole',
        accessor:'Thread_hole_sizexDepth_Fr_pulley_fitting_hole'
    }, 
    {
        Header:'DiaxDepth Fr pulley fitting hole before tapping',
        accessor:'DiaxDepth_Fr_pulley_fitting_hole_before_tapping'
    },    
    {
        Header:'DiaxDepth Fr pulley fitting hole counter bore',
        accessor:'DiaxDepth_Fr_pulley_fitting_hole_counter_bore'
    },    
    {
        Header:'Position Fly wheel fitting hole M13',
        accessor:'Position_Fly_wheel_fitting_hole_M13'
    }, 
    {
        Header:'Position Fly wheel fitting hole',
        accessor:'Position_Fly_wheel_fitting_hole'
    }, 
       
    {
        Header:'Remarks',
        accessor:'Remarks'
    },  
    {
        Header:'Surface hardness Pin',
        accessor:'Surface_hardness_Pin'
    },  
    {
        Header:'Straightness 1 4J',
        accessor:'Straightness_1_4J'
    },  
    {
        Header:'Straightness 5J',
        accessor:'Straightness_5J'
    },  
    {
        Header:'Straightness Pin',
        accessor:'Straightness_Pin'
    },  
  

]






export const COLUMNS5_2=[
    {
        Header: '#',
        accessor: (cell, index) => index + 1 
    },
    {
        Header:'Line',
        accessor:'Name'
    },
    {
        Header:'Shift',
        accessor:'Shift'
    },
    {
        Header:'Variant',
        accessor:'Variant'
    },
    {
        Header:'Part Number',
        accessor:'Part_Number'
    },
    {
        Header:'Date & Time',
        accessor:'Start_Time',
        //Cell: ({value})=> {return format(new Date(value),'dd/MM/yyyy hh:mm:ss a')}
    },
    {
        Header:'Position Rr center datum hole',
        accessor:'Position_Rr_center_datum_hole'
    },
    {
        Header:'Position Fr center datum hole',
        accessor:'Position_Fr_center_datum_hole'
    },
    {
        Header:'out Pilot BRG press fitting hole',
        accessor:'out_Pilot_BRG_press_fitting_hole'
    },
    {
        Header:'Run out 1Journal',
        accessor:'Run_out_1Journal'
    },
    {
        Header:'Run out Rear flange',
        accessor:'Run_out_Rear_flange'
    },
    {
        Header:'Run out 3 Journal',
        accessor:'Run_out_3_Journal'
    },
    {
        Header:'Remarks',
        accessor:'Remarks'
    },
  
]



export const COLUMNS6_1=[
    {
        Header: '#',
        accessor: (cell, index) => index + 1 
    },
    {
        Header:'Line',
        accessor:'Name'
    },
    {
        Header:'Shift',
        accessor:'Shift'
    },
    {
        Header:'Variant',
        accessor:'Variant'
    },
    {
        Header:'Part Number',
        accessor:'Part_Number'
    },
    {
        Header:'Date & Time',
        accessor:'Start_Time',
        //Cell: ({value})=> {return format(new Date(value),'dd/MM/yyyy hh:mm:ss a')}
    },
    {
        Header:'Thrust Surface',
        accessor:'Thrust_Surface'
    },
    {
        Header:'Fr axis Surface',
        accessor:'Fr_axis_Surface'
    },
    {
        Header:'Fr boss Surface',
        accessor:'Fr_boss_Surface'
    },
    {
        Header:'Machine Identification on Paint Mark 1GD and 2GD',
        accessor:'Machine_Identification_on_Paint_Mark_1GD_and_2GD'
    },
    {
        Header:'Pin surface',
        accessor:'Pin_surface'
    },
    {
        Header:'Position thrust face 1',
        accessor:'Position_thrust_face_1'
    },
    {
        Header:'Position thrust face 2',
        accessor:'Position_thrust_face_2'
    },
    {
        Header:'Machining range Thrust face',
        accessor:'Machining_range_Thrust_face'
    },
    {
        Header:'Width Thrust 1',
        accessor:'Width_Thrust_1'
    },
    {
        Header:'Width Thrust 2',
        accessor:'Width_Thrust_2'
    },    
    {
        Header:'Position Fr Boss end face Fr Axis end face datum',
        accessor:'Position_Fr_Boss_end_face_Fr_Axis_end_face_datum'
    },  
    {
        Header:'Machining range Fr boss end face',
        accessor:'Machining_range_Fr_boss_end_face'
    },  
    {
        Header:'Width Pin',
        accessor:'Width_Pin'
    },  
    {
        Header:'Machining range pin corner',
        accessor:'Machining_range_pin_corner'
    },  
    {
        Header:'Dia Pin oil hole chamfer',
        accessor:'Dia_Pin_oil_hole_chamfer'
    },  

    {
        Header:'Remarks',
        accessor:'Remarks'
    },  


]




export const COLUMNS7_1=[
    {
        Header: '#',
        accessor: (cell, index) => index + 1 
    },
    {
        Header:'Line',
        accessor:'Name'
    },
    {
        Header:'Shift',
        accessor:'Shift'
    },
    {
        Header:'Variant',
        accessor:'Variant'
    },
    {
        Header:'Part Number',
        accessor:'Part_Number'
    },
    {
        Header:'Date & Time',
        accessor:'Start_Time',
        //Cell: ({value})=> {return format(new Date(value),'dd/MM/yyyy hh:mm:ss a')}
    },
    {
        Header:'Machine identification paint mark 1GD and 2GD',
        accessor:'Machine_identification_paint_mark_1GD_and_2GD'
    },
    {
        Header:'Journal surface',
        accessor:'Journal_surface'
    },
    {
        Header:'Machining surface',
        accessor:'Machining_surface'
    },
    {
        Header:'Diameter Fr axis',
        accessor:'Diameter_Fr_axis'
    },
    {
        Header:'Circularity Fr axis',
        accessor:'Circularity_Fr_axis'
    },
    {
        Header:'Diameter Sensor plate press fitting axis',
        accessor:'Diameter_Sensor_plate_press_fitting_axis'
    },
    {
        Header:'Circularity Sensor plate press fitting axis',
        accessor:'Circularity_Sensor_plate_press_fitting_axis'
    },
    {
        Header:'Diameter Rr oil seal press fitting axis',
        accessor:'Diameter_Rr_oil_seal_press_fitting_axis'
    },
    {
        Header:'Circularity Rr oil seal press fitting axis',
        accessor:'Circularity_Rr_oil_seal_press_fitting_axis'
    },
    {
        Header:'Diameter Rr axis',
        accessor:'Diameter_Rr_axis'
    },    
    {
        Header:'Circularity Rr axis',
        accessor:'Circularity_Rr_axis'
    },  
    {
        Header:'Diameter Journal',
        accessor:'Diameter_Journal'
    },  
    {   Header:'Circularity Journal',
        accessor:'Circularity_Journal'
    },  
    {
       Header:'Diameter Pin',
       accessor:'Diameter_Pin'
    },  
    {
        Header:'Circularity Pin',
        accessor:'Circularity_Pin'
    },  
    {
        Header:'Position Fly wheel fitting face 1',
        accessor:'Position_Fly_wheel_fitting_face_1'
    },  
    {
        Header:'Position Fly wheel fitting face 2',
        accessor:'Position_Fly_wheel_fitting_face_2'
    },  
    {
        Header:'Position Fly wheel fitting face 3',
        accessor:'Position_Fly_wheel_fitting_face_3'
    },  
    {
        Header:'Surface hardness Journal',
        accessor:'Surface_hardness_Journal'
    },  
    {
        Header:'Surface hardness Pin',
        accessor:'Surface_hardness_Pin'
    },  
    {
        Header:'Straightness  1  4J',
        accessor:'Straightness_1_4J'
    },  
    {
        Header:'Straightness 5J',
        accessor:'Straightness_5J'
    },  
    {
        Header:'Straightness Pin',
        accessor:'Straightness_Pin'
    },  
    {
        Header:'Remarks',
        accessor:'Remarks'
    },  

]
export const COLUMNS7_2=[
    {
        Header: '#',
        accessor: (cell, index) => index + 1 
    },
    {
        Header:'Line',
        accessor:'Name'
    },
    {
        Header:'Shift',
        accessor:'Shift'
    },
    {
        Header:'Variant',
        accessor:'Variant'
    },
    {
        Header:'Part Number',
        accessor:'Part_Number'
    },
    {
        Header:'Date & Time',
        accessor:'Start_Time',
        //Cell: ({value})=> {return format(new Date(value),'dd/MM/yyyy hh:mm:ss a')}
    },
    {
        Header:'Step Rr oil seal press fitting axis',
        accessor:'Step_Rr_oil_seal_press_fitting_axis'
    },
    {
        Header:'Width 2 4e',
        accessor:'Width_2_4e'
    },
    {
        Header:'Machining range 1 4J corner',
        accessor:'Machining_range_1_4J_corner'
    },
    {
        Header:'Machining Range 5J corner',
        accessor:'Machining_Range_5J_corner'
    },
    {
        Header:'Diameter 5J corner',
        accessor:'Diameter_5J_corner'
    },
    {
        Header:'Diameter Journal oil hole chamfer',
        accessor:'Diameter_Journal_oil_hole_chamfer'
    },
    {
        Header:'Machining range Fly wheel fitting face',
        accessor:'Machining_range_Fly_wheel_fitting_face'
    },
    {
        Header:'Remarks',
        accessor:'Remarks'
    },

]


export const COLUMNS7_3=[
    {
        Header: '#',
        accessor: (cell, index) => index + 1 
    },
    {
        Header:'Line',
        accessor:'Name'
    },
    {
        Header:'Shift',
        accessor:'Shift'
    },
    {
        Header:'Variant',
        accessor:'Variant'
    },
    {
        Header:'Part Number',
        accessor:'Part_Number'
    },
    {
        Header:'Date & Time',
        accessor:'Start_Time',
        //Cell: ({value})=> {return format(new Date(value),'dd/MM/yyyy hh:mm:ss a')}
    },
    {
        Header:'Run out Thrust face 1',
        accessor:'Run_out_Thrust_face_1'
    },
    {
        Header:'Run out Thrust face 2',
        accessor:'Run_out_Thrust_face_2'
    },
    {
        Header:'Perpendicularity Thrust face 1',
        accessor:'Perpendicularity_Thrust_face_1'
    },
    {
        Header:'Perpendicularity Thrust face 2',
        accessor:'Perpendicularity_Thrust_face_2'
    },
    {
        Header:'Run out Fly wheel fitting face Both center datum',
        accessor:'Run_out_Fly_wheel_fitting_face_Both_center_datum'
    },
    {
        Header:'Perpendicularity Fly wheel fitting face Both center datum',
        accessor:'Perpendicularity_Fly_wheel_fitting_face_Both_center_datum'
    },
    {
        Header:'Run out Fr boss end face',
        accessor:'Run_out_Fr_boss_end_face'
    },
    {
        Header:'Perpendicularity Fr boss end face',
        accessor:'Perpendicularity_Fr_boss_end_face'
    },
    {
        Header:'Run out Fr axis Both centers datum',
        accessor:'Run_out_Fr_axis_Both_centers_datum'
    },
    {
        Header:'Run out Journal Both center datum 1',
        accessor:'Run_out_Journal_Both_center_datum_1'
    },    
    {
        Header:'Run out Journal Both center datum 2',
        accessor:'Run_out_Journal_Both_center_datum_2'
    },    
    {
        Header:'Run out Journal Both center datum 3',
        accessor:'Run_out_Journal_Both_center_datum_3'
    },    
    {
        Header:'Run out Journal Both center datum 4',
        accessor:'Run_out_Journal_Both_center_datum_4'
    }, 
    {
        Header:'Run out Journal Both center datum 5',
        accessor:'Run_out_Journal_Both_center_datum_5'
    }, 
    {
        Header:'Parallelism Pin 1',
        accessor:'Parallelism_Pin_1'
    },    
    {
        Header:'Parallelism Pin 2',
        accessor:'Parallelism_Pin_2'
    },    
    {
        Header:'Parallelism Pin 3',
        accessor:'Parallelism_Pin_3'
    }, 
    {
        Header:'Parallelism Pin 4',
        accessor:'Parallelism_Pin_4'
    }, 
       
    {
        Header:'Position 1 4 Pin Both centerXDatum face 1',
        accessor:'Position_1_4_Pin_Both_centerXDatum_face_1'
    },  
    {
        Header:'Position 1 4 Pin Both centerXDatum face 2',
        accessor:'Position_1_4_Pin_Both_centerXDatum_face_2'
    },  
    {
        Header:'Position 1 4 Pin Both centerXDatum face 3',
        accessor:'Position_1_4_Pin_Both_centerXDatum_face_3'
    },  
    {
        Header:'Position 1 4 Pin Both centerXDatum face 4',
        accessor:'Position_1_4_Pin_Both_centerXDatum_face_4'
    },  
    {
        Header:'Half stroke Pin Both centers datum 1',
        accessor:'Half_stroke_Pin_Both_centers_datum_1'
    },  
    {
        Header:'Half stroke Pin Both centers datum 2',
        accessor:'Half_stroke_Pin_Both_centers_datum_2'
    },  
    {
        Header:'Half stroke Pin Both centers datum 3',
        accessor:'Half_stroke_Pin_Both_centers_datum_3'
    },  
    {
        Header:'Half stroke Pin Both centers datum 4',
        accessor:'Half_stroke_Pin_Both_centers_datum_4'
    },  
    {
        Header:'Run out Fr axis 1 5 Journal datum',
        accessor:'Run_out_Fr_axis_1_5_Journal_datum'
    },  
    {
        Header:'Run out 2 4J 1 5J datum 1',
        accessor:'Run_out_2_4J_1_5J_datum_1'
    }, 
    {
        Header:'Run out 2 4J 1 5J datum 2',
        accessor:'Run_out_2_4J_1_5J_datum_2'
    }, 
    {
        Header:'Run out 2 4J 1 5J datum 3',
        accessor:'Run_out_2_4J_1_5J_datum_3'
    }, 
    {
        Header:'Run out Sensor plate press fitting axis 1 5 Journal datum',
        accessor:'Run_out_Sensor_plate_press_fitting_axis_1_5_Journal_datum'
    }, 
    {
        Header:'Run out Rr oil seal press fitting axis 1 5 journal datum',
        accessor:'Run_out_Rr_oil_seal_press_fitting_axis_1_5_journal_datum'
    }, 
    {
        Header:'Run out Rr axis 1 5 journal datum',
        accessor:'Run_out_Rr_axis_1_5_journal_datum'
    }, 
    {
        Header:'Parallelism 2 4J 1 5 journal datum 1',
        accessor:'Parallelism_2_4J_1_5_journal_datum_1'
    }, 
    {
        Header:'Parallelism 2 4J 1 5 journal datum 2',
        accessor:'Parallelism_2_4J_1_5_journal_datum_2'
    }, 
    {
        Header:'Parallelism 2 4J 1 5 journal datum 3',
        accessor:'Parallelism_2_4J_1_5_journal_datum_3'
    }, 
    {
        Header:'Parallelism Pin 1 4P 1 5 journal datum 1',
        accessor:'Parallelism_Pin_1_4P_1_5_journal_datum_1'
    }, 
    {
        Header:'Parallelism Pin 1 4P 1 5 journal datum 2',
        accessor:'Parallelism_Pin_1_4P_1_5_journal_datum_2'
    }, 
    {
        Header:'Parallelism Pin 1 4P 1 5 journal datum 3',
        accessor:'Parallelism_Pin_1_4P_1_5_journal_datum_3'
    }, 
    {
        Header:'Parallelism Pin 1 4P 1 5 journal datum 4',
        accessor:'Parallelism_Pin_1_4P_1_5_journal_datum_4'
    }, 
    {
        Header:'Position 2 4P 1 5 journal 1P datum 1',
        accessor:'Position_2_4P_1_5_journal_1P_datum_1'
    }, 
    {
        Header:'Position 2 4P 1 5 journal 1P datum 2',
        accessor:'Position_2_4P_1_5_journal_1P_datum_2'
    }, 
    {
        Header:'Position 2 4P 1 5 journal 1P datum 3',
        accessor:'Position_2_4P_1_5_journal_1P_datum_3'
    }, 
    {
        Header:'Half_stroke Pin 1 5 journal datum 1',
        accessor:'Half_stroke_Pin_1_5_journal_datum_1'
    }, 
     {
        Header:'Half stroke Pin 1 5 journal datum 2',
        accessor:'Half_stroke_Pin_1_5_journal_datum_2'
    }, 
     {
        Header:'Half stroke Pin 1 5 journal datum 3',
        accessor:'Half_stroke_Pin_1_5_journal_datum_3'
    }, 
     {
        Header:'Half stroke Pin 1 5 journal datum 4',
        accessor:'Half_stroke_Pin_1_5_journal_datum_4'
    }, 
     {
        Header:'Remarsk',
        accessor:'Remarks'
    }, 
    
 
]





export const COLUMNS7_4=[
    {
        Header: '#',
        accessor: (cell, index) => index + 1 
    },
    {
        Header:'Line',
        accessor:'Name'
    },
    {
        Header:'Shift',
        accessor:'Shift'
    },
    {
        Header:'Variant',
        accessor:'Variant'
    },
    {
        Header:'Part Number',
        accessor:'Part_Number'
    },
    {
        Header:'Date & Time',
        accessor:'Start_Time',
        //Cell: ({value})=> {return format(new Date(value),'dd/MM/yyyy hh:mm:ss a')}
    },
    {
        Header:'Grinding crack Thrust face',
        accessor:'Grinding_crack_Thrust_face'
    },
    {
        Header:'Grinding crack Pin',
        accessor:'Grinding_crack_Pin'
    },
    {
        Header:'Grinding crack Journal',
        accessor:'Grinding_crack_Journal'
    },
    {
        Header:'Grinding crack Grinding axis',
        accessor:'Grinding_crack_Grinding_axis'
    },
    {
        Header:'Remarks',
        accessor:'Remarks'
    },
    
  
]


export const COLUMNS8_1=[
    {
        Header: '#',
        accessor: (cell, index) => index + 1 
    },
    {
        Header:'Line',
        accessor:'Name'
    },
    {
        Header:'Shift',
        accessor:'Shift'
    },
    {
        Header:'Variant',
        accessor:'Variant'
    },
    {
        Header:'Part Number',
        accessor:'Part_Number'
    },
    {
        Header:'Date & Time',
        accessor:'Start_Time',
        //Cell: ({value})=> {return format(new Date(value),'dd/MM/yyyy hh:mm:ss a')}
    },
     {
        Header:'Keyway Surface',
        accessor:'Keyway_Surface'
    },
    {
        Header:'Chamfer Keyway surface',
        accessor:'Chamfer_Keyway_surface'
    },
    {
        Header:'Width Keyway',
        accessor:'Width_Keyway'
    },
    {
        Header:'Depth Keyway',
        accessor:'Depth_Keyway'
    },
    {
        Header:'Pos keyway 1 5 journal 1P Datum',
        accessor:'Pos_keyway_1_5_journal_1P_Datum'
    },
     {
        Header:'Position Keyway 1 5 journal datum',
        accessor:'Position_Keyway_1_5_journal_datum'
    },
    {
        Header:'Relative Position keyway',
        accessor:'Relative_Position_keyway'
    },
    {
        Header:'Parallelism keyway 1 5 journal datum',
        accessor:'Parallelism_keyway_1_5_journal_datum'
    },
    {
        Header:'NE sensor plate surface',
        accessor:'NE_sensor_plate_surface'
    },
    //{
    //    Header:'NE sensor plate press fitting surface',
    //    accessor:'NE_sensor_plate_press_fitting_surface'
    //},
    {
        Header:'NE sensor plate press fitting surface',
        accessor:'NE_sensor_plate_press_fitting_surface'
    },
    {
        Header:'Key Surface',
        accessor:'Key_Surface'
    },
    {
        Header:'Key press fitting surface',
        accessor:'Key_press_fitting_surface'
    },
    {
        Header:'Height Key press fitting',
        accessor:'Height_Key_press_fitting'
    },
    {
        Header:'Relative Position key press fitting',
        accessor:'Relative_Position_key_press_fitting'
    },
    {
        Header:'Pos NE sensor plate press fitting',
        accessor:'Pos_NE_sensor_plate_press_fitting'
    },
    {
        Header:'Angle NE sensor plate press fitting',
        accessor:'Angle_NE_sensor_plate_press_fitting'
    },
    {
        Header:'Balance correction hole surface',
        accessor:'Balance_correction_hole_surface'
    },
    {
        Header:'Remarks',
        accessor:'Remarks'
    },


]





export const COLUMNS9_1=[
    {
        Header: '#',
        accessor: (cell, index) => index + 1 
    },
    {
        Header:'Line',
        accessor:'Name'
    },
    {
        Header:'Shift',
        accessor:'Shift'
    },
    {
        Header:'Variant',
        accessor:'Variant'
    },
    {
        Header:'Part Number',
        accessor:'Part_Number'
    },
    {
        Header:'Date & Time',
        accessor:'Start_Time',
        //Cell: ({value})=> {return format(new Date(value),'dd/MM/yyyy hh:mm:ss a')}
    },
    {
        Header:'Journal Pin lap surface except marked',
        accessor:'Journal_Pin_lap_surface_except_marked'
    },
    {
        Header:'Rr oil seal press fitting surface',
        accessor:'Rr_oil_seal_press_fitting_surface'
    },
    {
        Header:'Diameter Journal 5',
        accessor:'Diameter_Journal_5'
    },
    {
        Header:'Diameter Journal 1',
        accessor:'Diameter_Journal_1'
    },
    {
        Header:'Diameter Journal 2',
        accessor:'Diameter_Journal_2'
    },
    {
        Header:'Diameter Journal 3',
        accessor:'Diameter_Journal_3'
    },
    {
        Header:'Diameter Journal 4',
        accessor:'Diameter_Journal_4'
    },
    {
        Header:'Circularity Journal 1',
        accessor:'Circularity_Journal_1'
    },
    {
        Header:'Circularity Journal 2',
        accessor:'Circularity_Journal_2'
    },
    {
        Header:'Circularity Journal 3',
        accessor:'Circularity_Journal_3'
    },
    {
        Header:'Circularity Journal 4',
        accessor:'Circularity_Journal_4'
    },
    {
        Header:'Circularity Journal 5',
        accessor:'Circularity_Journal_5'
    },
    {
        Header:'Journal Rank Engraving 1',
        accessor:'Journal_Rank_Engraving_1'
    },
    {
        Header:'Journal Rank Engraving 2',
        accessor:'Journal_Rank_Engraving_2'
    },
    {
        Header:'Journal Rank Engraving 3',
        accessor:'Journal_Rank_Engraving_3'
    },
    {
        Header:'Journal Rank Engraving 4',
        accessor:'Journal_Rank_Engraving_4'
    },
    {
        Header:'Journal Rank Engraving 5',
        accessor:'Journal_Rank_Engraving_5'
    },
    {
        Header:'Diameter Pin 1',
        accessor:'Diameter_Pin_1'
    },
    {
        Header:'Diameter Pin 2',
        accessor:'Diameter_Pin_2'
    },
    {
        Header:'Diameter Pin 3',
        accessor:'Diameter_Pin_3'
    },
    {
        Header:'Diameter Pin 4',
        accessor:'Diameter_Pin_4'
    },
    {
        Header:'Circularity Pin 1',
        accessor:'Circularity_Pin_1'
    },
    {
        Header:'Circularity Pin 2',
        accessor:'Circularity_Pin_2'
    },
    {
        Header:'Circularity Pin 3',
        accessor:'Circularity_Pin_3'
    },
    {
        Header:'Circularity Pin 4',
        accessor:'Circularity_Pin_4'
    },
    {
        Header:'Pin Rank Engraving 1',
        accessor:'Pin_Rank_Engraving_1'
    },
    {
        Header:'Pin Rank Engraving 2',
        accessor:'Pin_Rank_Engraving_2'
    },
    {
        Header:'Pin Rank Engraving 3',
        accessor:'Pin_Rank_Engraving_3'
    },
    {
        Header:'Pin Rank Engraving 4',
        accessor:'Pin_Rank_Engraving_4'
    },
    {
        Header:'Diameter Rr oil seal press fitting',
        accessor:'Diameter_Rr_oil_seal_press_fitting'
    },
    {
        Header:'Circularity Rr oil seal press fitting',
        accessor:'Circularity_Rr_oil_seal_press_fitting'
    },
    {
        Header:'Remarks',
        accessor:'Remarks'
    },



]

