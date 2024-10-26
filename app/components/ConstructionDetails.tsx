import Image from "next/image";
import React from "react";

function ConstructionDetails() {
  return (
    <section className='hidden justify-center pt-[53px] lg:flex'>
      <div className='flex flex-col gap-[53px] lg:w-[1000px] xl:w-[1250px] 2xl:w-[1280px]'>
        <div className='inline-flex h-20 flex-col items-center justify-start gap-1.5'>
          <div className='inline-flex items-center justify-center gap-[5px] self-stretch'>
            <Image
              src={"/images/contructor-detail.svg"}
              alt=''
              width={350}
              height={1}
            />
            <div className='text-center text-[28px] font-semibold leading-[46.44px] text-[#352d39]'>
              Wooden House - Construction Details
            </div>
            <Image
              src={"/images/contructor-detail.svg"}
              alt=''
              width={350}
              height={1}
            />
          </div>
          <div className='text-center text-lg font-light leading-[27px] text-[#626262]'>
            An in-depth look at the construction process of building a wooden
            house.
          </div>
        </div>
        <div className='flex'>
          <div className='relative inline-flex w-[303px] flex-col items-center justify-start gap-[11.55px] border-2 border-[#d75337] bg-white p-[23.10px]'>
            <div className='text-xl font-semibold text-[#d75337]'>
              Construction of Roof
            </div>
            <Image
              src={"/images/detail-roof.svg"}
              alt=''
              width={257}
              height={157}
            />
            <div className='absolute left-[145px] top-[115px] flex h-[14.06px] w-[14.06px] flex-col items-center justify-center gap-[3.62px] rounded-[7.03px] bg-[#d75337] px-[5.07px] py-[3.26px]'>
              <div className='text-[6.15px] font-semibold text-white'>5</div>
            </div>
            <div className='absolute left-[60px] top-[130px] flex h-[14.06px] w-[14.06px] flex-col items-center justify-center gap-[3.62px] rounded-[7.03px] bg-[#d75337] px-[5.07px] py-[3.26px]'>
              <div className='text-[6.15px] font-semibold text-white'>7</div>
            </div>
            <div className='absolute left-[120px] top-[140px] flex h-[14.06px] w-[14.06px] flex-col items-center justify-center gap-[3.62px] rounded-[7.03px] bg-[#d75337] px-[5.07px] py-[3.26px]'>
              <div className='text-[6.15px] font-semibold text-white'>4</div>
            </div>
            <div className='absolute left-[80px] top-[150px] flex h-[14.06px] w-[14.06px] flex-col items-center justify-center gap-[3.62px] rounded-[7.03px] bg-[#d75337] px-[5.07px] py-[3.26px]'>
              <div className='text-[6.15px] font-semibold text-white'>6</div>
            </div>
            <div className='absolute left-[235px] top-[140px] flex h-[14.06px] w-[14.06px] flex-col items-center justify-center gap-[3.62px] rounded-[7.03px] bg-[#d75337] px-[5.07px] py-[3.26px]'>
              <div className='text-[6.15px] font-semibold text-white'>1</div>
            </div>
            <div className='absolute left-[140px] top-[140px] flex h-[14.06px] w-[14.06px] flex-col items-center justify-center gap-[3.62px] rounded-[7.03px] bg-[#d75337] px-[5.07px] py-[3.26px]'>
              <div className='text-[6.15px] font-semibold text-white'>3</div>
            </div>
            <div className='absolute left-[160px] top-[140px] flex h-[14.06px] w-[14.06px] flex-col items-center justify-center gap-[3.62px] rounded-[7.03px] bg-[#d75337] px-[5.07px] py-[3.26px]'>
              <div className='text-[6.15px] font-semibold text-white'>1</div>
            </div>
            <div className='absolute left-[170px] top-[180px] flex h-[14.06px] w-[14.06px] flex-col items-center justify-center gap-[3.62px] rounded-[7.03px] bg-[#d75337] px-[5.07px] py-[3.26px]'>
              <div className='text-[6.15px] font-semibold text-white'>2</div>
            </div>
            <div className='inline-flex items-center justify-start gap-3 self-stretch'>
              <div className='inline-flex h-[20.36px] w-[20.36px] flex-col items-center justify-center gap-[5.24px] rounded-[10.18px] bg-[#d75337] px-[7.34px] py-[4.72px]'>
                <div className='text-[8.91px] font-semibold text-white'>1</div>
              </div>
              <div className='shrink grow basis-0 text-sm font-normal leading-snug text-[#373737]'>
                Wooden Cladding
              </div>
            </div>
            <div className='inline-flex items-center justify-start gap-3 self-stretch'>
              <div className='inline-flex h-[20.36px] w-[20.36px] flex-col items-center justify-center gap-[5.24px] rounded-[10.18px] bg-[#d75337] px-[7.34px] py-[4.72px]'>
                <div className='text-[8.91px] font-semibold text-white'>2</div>
              </div>
              <div className='shrink grow basis-0 text-sm font-normal leading-snug text-[#373737]'>
                Wooden Rafter
              </div>
            </div>
            <div className='inline-flex items-center justify-start gap-3 self-stretch'>
              <div className='inline-flex h-[20.36px] w-[20.36px] flex-col items-center justify-center gap-[5.24px] rounded-[10.18px] bg-[#d75337] px-[7.34px] py-[4.72px]'>
                <div className='text-[8.91px] font-semibold text-white'>3</div>
              </div>
              <div className='shrink grow basis-0 text-sm font-normal leading-snug text-[#373737]'>
                Rock Wool
              </div>
            </div>
            <div className='inline-flex items-center justify-start gap-3 self-stretch'>
              <div className='inline-flex h-[20.36px] w-[20.36px] flex-col items-center justify-center gap-[5.24px] rounded-[10.18px] bg-[#d75337] px-[7.34px] py-[4.72px]'>
                <div className='text-[8.91px] font-semibold text-white'>4</div>
              </div>
              <div className='shrink grow basis-0 text-sm font-normal capitalize leading-snug text-[#373737]'>
                Water proof ply
              </div>
            </div>
            <div className='inline-flex items-center justify-start gap-3 self-stretch'>
              <div className='inline-flex h-[20.36px] w-[20.36px] flex-col items-center justify-center gap-[5.24px] rounded-[10.18px] bg-[#d75337] px-[7.34px] py-[4.72px]'>
                <div className='text-[8.91px] font-semibold text-white'>5</div>
              </div>
              <div className='shrink grow basis-0 text-sm font-normal leading-snug text-[#373737]'>
                Black Liquid Bitumen Coal Tar
              </div>
            </div>
            <div className='inline-flex items-center justify-start gap-3 self-stretch'>
              <div className='inline-flex h-[20.36px] w-[20.36px] flex-col items-center justify-center gap-[5.24px] rounded-[10.18px] bg-[#d75337] px-[7.34px] py-[4.72px]'>
                <div className='text-[8.91px] font-semibold text-white'>6</div>
              </div>
              <div className='shrink grow basis-0 text-sm font-normal leading-snug text-[#373737]'>
                Membrane
              </div>
            </div>
            <div className='inline-flex items-center justify-start gap-3 self-stretch'>
              <div className='inline-flex h-[20.36px] w-[20.36px] flex-col items-center justify-center gap-[5.24px] rounded-[10.18px] bg-[#d75337] px-[7.34px] py-[4.72px]'>
                <div className='text-[8.91px] font-semibold text-white'>7</div>
              </div>
              <div className='shrink grow basis-0 text-sm font-normal leading-snug text-[#373737]'>
                Fiber Glass Shingles
              </div>
            </div>
            <div className='absolute -right-[330px] h-[1.6px] w-[330px] bg-[#D75337]'></div>
          </div>
          <div className='relative'>
            <Image src={"/images/detail.svg"} alt='' width={837} height={627} />
            <div className='absolute left-[36%] top-[31%] flex h-[55px] w-[55px] items-center justify-center'>
              <div className='inline-flex h-[38.85px] w-[38.85px] flex-col items-center justify-center gap-2.5 rounded-[19.42px] bg-[#d75337] px-3.5 py-[9px]'>
                <div className='text-[17px] font-semibold text-white'>1</div>
              </div>
              <div className='absolute left-[4px] top-[4px] h-[47px] w-[47px] rounded-full border border-[#d75337]' />
              <div className='absolute left-0 top-0 h-[55px] w-[55px] rounded-full border border-[#d75337]/25' />
            </div>
            <div className='absolute left-[28%] top-[60%] flex h-[55px] w-[55px] items-center justify-center'>
              <div className='inline-flex h-[38.85px] w-[38.85px] flex-col items-center justify-center gap-2.5 rounded-[19.42px] bg-[#d75337] px-3.5 py-[9px]'>
                <div className='text-[17px] font-semibold text-white'>2</div>
              </div>
              <div className='absolute left-[4px] top-[4px] h-[47px] w-[47px] rounded-full border border-[#d75337]' />
              <div className='absolute left-0 top-0 h-[55px] w-[55px] rounded-full border border-[#d75337]/25' />
            </div>
            <div className='absolute left-[45%] top-[60%] flex h-[55px] w-[55px] items-center justify-center'>
              <div className='inline-flex h-[38.85px] w-[38.85px] flex-col items-center justify-center gap-2.5 rounded-[19.42px] bg-[#d75337] px-3.5 py-[9px]'>
                <div className='text-[17px] font-semibold text-white'>5</div>
              </div>
              <div className='absolute left-[4px] top-[4px] h-[47px] w-[47px] rounded-full border border-[#d75337]' />
              <div className='absolute left-0 top-0 h-[55px] w-[55px] rounded-full border border-[#d75337]/25' />
            </div>
            <div className='absolute left-[75%] top-[78%] flex h-[55px] w-[55px] items-center justify-center'>
              <div className='absolute left-[8px] top-[8px] inline-flex h-[38.85px] w-[38.85px] flex-col items-center justify-center gap-2.5 rounded-[19.42px] bg-[#d75337] px-3.5 py-[9px]'>
                <div className='text-[17px] font-semibold text-white'>3</div>
              </div>
              <div className='absolute left-[4px] top-[4px] h-[47px] w-[47px] rounded-full border border-[#d75337]' />
              <div className='absolute left-0 top-0 h-[55px] w-[55px] rounded-full border border-[#d75337]/25' />
            </div>
            <div className='absolute left-[69%] top-[56%] flex h-[55px] w-[55px] items-center justify-center'>
              <div className='absolute left-[8px] top-[8px] inline-flex h-[38.85px] w-[38.85px] flex-col items-center justify-center gap-2.5 rounded-[19.42px] bg-[#d75337] px-3.5 py-[9px]'>
                <div className='text-[17px] font-semibold text-white'>4</div>
              </div>
              <div className='absolute left-[4px] top-[4px] h-[47px] w-[47px] rounded-full border border-[#d75337]' />
              <div className='absolute left-0 top-0 h-[55px] w-[55px] rounded-full border border-[#d75337]/25' />
            </div>
            <div className='absolute left-[39%] top-[25px] h-[179px] w-[1.6px] bg-[#D75337]'></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConstructionDetails;
