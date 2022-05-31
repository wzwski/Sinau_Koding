var ulang = 1 ;
while(ulang <= 10){
    if(ulang <= 6){
        console.log("Angkot no. %s beroperasi dengan baik", ulang);
    }else if(ulang == 8){
        console.log("Angkot no. %s sedang lembur", ulang);
    }else{
        console.log("Angkot no. %s sedang tidak beroperasi", ulang);
    }
    
    ulang++;
}